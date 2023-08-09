import { Op } from 'sequelize';
import SequelizeRecipe from '../database/models/SequelizeRecipe';
// import { IRecipeModel } from '../interfaces/recipes/IRecipesModel';
import { IRecipes } from '../interfaces/recipes/IRecipes';

export default class RecipesModel {
  private recipeModel = SequelizeRecipe;
  
  async findAll(type: string): Promise<IRecipes[]> {
    return await this.recipeModel.findAll({
      where: {
        type: {
          [Op.like]: `%${type}%`
        }
      }
    });
  }

  async findByName(name: string, type: string): Promise<IRecipes[]> {
    return await this.recipeModel.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        },
        type: {
          [Op.iLike]: `%${type}%`
        }
      }
    });
  }

  async findByFirstLetter(letter: string, type: string): Promise<IRecipes[]> {
    return await this.recipeModel.findAll({
      where: {
        name: {
          [Op.iLike]: `${letter}%`
        },
        type: {
          [Op.iLike]: `%${type}%`
        }
      }
    });
  }
}