import { Op } from 'sequelize';
import IIngredient from '../interfaces/ingredients/IIngredient';
import SequelizeIngredient from '../database/models/SequelizeIngredient';
import SequelizeRecipe from '../database/models/SequelizeRecipe';

export default class IngredientModel {
  private ingredientModel = SequelizeIngredient;
  private recipeModel = SequelizeRecipe;

  async getAll(): Promise<IIngredient[]> {
    const ingredients = await this.ingredientModel.findAll();
    return ingredients;
  }

  async filterByQuery(query: string): Promise<IIngredient[]> {
    const filteredRecipes = await this.ingredientModel.findAll({
      where: {
        name: { [Op.substring]: `%${query}`}
      },
      include: [ { model: SequelizeRecipe, as: 'recipes'}]
    });
    return filteredRecipes;
  }

  async findByIds(ids: (number | string)[]): Promise<IIngredient[]> {
    const ingredients = await this.ingredientModel.findAll({ where: { id: ids }});
    return ingredients;
  }
}