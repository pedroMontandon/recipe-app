import { Op } from 'sequelize';
import IIngredient from '../interfaces/ingredients/IIngredient';
import SequelizeIngredient from '../database/models/SequelizeIngredient';
import SequelizeRecipe from '../database/models/SequelizeRecipe';

export default class IngredientModel {
  private ingredientModel = SequelizeIngredient;
  private recipeModel = SequelizeRecipe;

  async getAll(type: string): Promise<IIngredient[]> {
    console.log(type);
    const ingredients = await this.ingredientModel.findAll();
    return ingredients;
  }

  async filterByQuery(query: string): Promise<IIngredient[]> {
    const filteredRecipes = await this.ingredientModel.findAll({
      where: {
        name: { [Op.substring]: `%${query}`}
      },
      include: [ { model: SequelizeRecipe, through: {as: 'ingredients_recipes'}, as: 'recipes'}]
    });
    return filteredRecipes;
  }
}