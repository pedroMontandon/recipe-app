import IngredientModel from '../models/IngredientModel';
import { IRecipes } from '../interfaces/recipes/IRecipes';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import RecipesModel from '../models/RecipeModel';
import IngredientsRecipesModel from '../models/IngredientsRecipesModel';
import CreateRecipePayload from '../interfaces/recipes/CreateRecipePayload';

export default class RecipesService {
  constructor(
        private recipesModel = new RecipesModel(),
        private ingredientsModel = new IngredientModel(),
        private auxiModel = new IngredientsRecipesModel(),
  ) { }

  public async getAllRecipes(type: string): Promise<ServiceResponse<IRecipes[]>> {
    const allRecipes = await this.recipesModel.findAll(type);
    return { status: 'SUCCESSFUL', data: allRecipes };
  }

  public async findByName(name: string, type: string): Promise<ServiceResponse<IRecipes[]>> {
    const foundRecipe = await this.recipesModel.findByName(name, type);
    return { status: 'SUCCESSFUL', data: foundRecipe };
  }

  public async findByFirstLetter(letter: string, type: string): Promise<ServiceResponse<IRecipes[]>> {
    const foundRecipe = await this.recipesModel.findByFirstLetter(letter, type);
    return { status: 'SUCCESSFUL', data: foundRecipe };
  }

  public async random(limit: string = '1', type: string): Promise<ServiceResponse<IRecipes[]>> {
    const l = limit === '1' ? 1 : parseInt(limit);
    const recipes = await this.recipesModel.random(l, type);
    return { status: 'SUCCESSFUL', data: recipes };
  }

  public async findByPk(id: string | number, type: string): Promise<ServiceResponse<IRecipes | null>> {
    const recipe = await this.recipesModel.findByPk(id, type);
    if (!recipe) return { status: 'NOT_FOUND', data: { message: 'Recipe not found' } };
    return { status: 'SUCCESSFUL', data: recipe };
  }

  public async create(payload: CreateRecipePayload): Promise<ServiceResponse<IRecipes>> {
    try {
      const ingredientIds = payload.ingredients.map(({ id }) => id);
      const ingredientsFound = await this.ingredientsModel.findByIds(ingredientIds);
      if (
        ingredientsFound.length !== payload.ingredients.length
      ) return { status: 'NOT_FOUND', data: { message: 'Some ingredient was not found'} };
      const data =  {
        areaId: payload.areaId,
        categoryId: payload.categoryId,
        instructions: payload.instructions,
        name: payload.name,
        tags: payload.tags,
        thumb: payload.thumb,
        type: payload.type,
        youtube: payload.youtube,
      };
      const recipe = await this.recipesModel.create(data);
      const recipeIngredients = payload.ingredients
        .map(({ id, measure }) => ({ ingredientId: id, measure, recipeId: recipe.id }));
      await this.auxiModel.create(recipeIngredients);
      return { status: 'CREATED', data: recipe };
    } catch (error) {
      return { status: 'INTERNAL_SERVER_ERROR', data: { message: 'Internal server error' } };
    }
  }
}