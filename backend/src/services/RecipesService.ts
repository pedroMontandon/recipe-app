import { IRecipes } from '../interfaces/recipes/IRecipes';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import RecipesModel from '../models/RecipeModel';

export default class RecipesService {
  constructor(
        private recipesModel = new RecipesModel(),
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
}