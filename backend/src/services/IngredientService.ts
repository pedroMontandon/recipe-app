import IngredientModel from '../models/IngredientModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import IIngredientRecipes from '../interfaces/ingredients/IIngredientRecipes';
import { IRecipes } from '../interfaces/recipes/IRecipes';
import IIngredient from '../interfaces/ingredients/IIngredient';

export default class IngredientService {
  constructor (private ingredientModel = new IngredientModel()) {}

  async getByQuery(ingredient: string): Promise<ServiceResponse<IRecipes[]>> {
    const recipes = await this.ingredientModel.filterByQuery(ingredient) as IIngredientRecipes[];
    const filteredRecipes = recipes.reduce((acc, curr) => {
      return [...acc, ...curr.recipes];
    }, [] as IRecipes[]);
    return { status: 'SUCCESSFUL', data:  filteredRecipes };
  }
  
  async getAll(): Promise<ServiceResponse<IIngredient[]>> {
    const ingredients = await this.ingredientModel.getAll();
    return { status: 'SUCCESSFUL', data: ingredients };
  }
}