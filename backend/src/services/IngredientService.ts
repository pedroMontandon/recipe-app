import IngredientModel from '../models/IngredientModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import IIngredient from '../interfaces/ingredients/IIngredient';
import IngredientRecipeModel from '../models/IngredientRecipeModel';

export default class IngredientService {
  constructor (private ingredientModel = new IngredientModel(), private ingredientRecipeModel = new IngredientRecipeModel()) {}

  async getByQuery(ingredient: string): Promise<ServiceResponse<IIngredient[]>> {
    const recipes = await this.ingredientModel.filterByQuery(ingredient);
    return { status: 'SUCCESSFUL', data:  recipes };
  }
}