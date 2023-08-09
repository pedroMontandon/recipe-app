import { IRecipes } from '../interfaces/recipes/IRecipes';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import RecipesModel from '../models/RecipeModel';

export default class RecipesService {
  constructor(
        private recipesModel =new RecipesModel(),
  ) { }

  public async getAllRecipes(type: string): Promise<ServiceResponse<IRecipes[]>> {
    const allRecipes = await this.recipesModel.findAll(type);
    return { status: 'SUCCESSFUL', data: allRecipes };
  }
}