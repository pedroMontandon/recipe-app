import { Op } from 'sequelize';
import SequelizeRecipe from '../database/models/SequelizeRecipe';
// import { IRecipeModel } from '../interfaces/recipes/IRecipesModel';
import { IRecipes } from '../interfaces/recipes/IRecipes';
import SequelizeCategory from '../database/models/SequelizeCategory';
import SequelizeArea from '../database/models/SequelizeArea';
import SequelizeIngredient from '../database/models/SequelizeIngredient';
import db from '../database/models';

export default class RecipesModel {
  private recipeModel = SequelizeRecipe;
  
  async findAll(type: string): Promise<IRecipes[]> {
    return await this.recipeModel.findAll({
      where: {
        type: {
          [Op.like]: `%${type}%`
        }
      },
      include: [{ model: SequelizeCategory, as: 'category'}, { model: SequelizeArea, as: 'area'}, { model: SequelizeIngredient, as: 'ingredients'}]
    });
  }

  async findByName(name: string, type: string): Promise<IRecipes[]> {
    return await this.recipeModel.findAll({
      where: {
        name: {
          [Op.substring]: `%${name}%`
        },
        type: {
          [Op.like]: `%${type}%`
        }
      },
      include: [{ model: SequelizeCategory, as: 'category'}, { model: SequelizeArea, as: 'area'}, { model: SequelizeIngredient, as: 'ingredients'}]
    });
  }

  async findByFirstLetter(letter: string, type: string): Promise<IRecipes[]> {
    return await this.recipeModel.findAll({
      where: {
        name: {
          [Op.startsWith]: letter
        },
        type: {
          [Op.like]: `%${type}%`
        }
      },
      include: [{ model: SequelizeCategory, as: 'category'}, { model: SequelizeArea, as: 'area'}, { model: SequelizeIngredient, as: 'ingredients'}]
    });
  }

  async random(limit: number = 1, type: string) {
    const recipes = await this.recipeModel.findAll({
      where: { type },
      order: db.random(),
      limit,
    });
    return recipes;
  }
}