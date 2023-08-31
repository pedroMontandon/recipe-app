import IIngredientRecipe from '../interfaces/ingredients-recipes/IIngredientRecipe';
import SequelizeIngredientsRecipes from '../database/models/SequelizeIngredientsRecipes';
import { NewEntity } from '../interfaces';

export default class IngredientsRecipesModel {
  private model = SequelizeIngredientsRecipes;
  
  async create(payload: NewEntity<IIngredientRecipe>[]): Promise<IIngredientRecipe[]> {
    const data = await this.model.bulkCreate(payload);
    return data;
  }
}

