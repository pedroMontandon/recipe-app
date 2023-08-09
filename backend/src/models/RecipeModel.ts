import { Op } from 'sequelize';
import SequelizeRecipe from '../database/models/SequelizeRecipe';
// import { IRecipeModel } from '../interfaces/recipes/IRecipesModel';
import { IRecipes } from '../interfaces/recipes/IRecipes';

export default class RecipesModel {
  private recipeModel = SequelizeRecipe;
  
  async findAll(): Promise<IRecipes[]> {
    return await this.recipeModel.findAll();
  }

  async findByName(name: string): Promise<IRecipes[]> {
    return await this.recipeModel.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    });
  }

  async findByFirstLetter(letter: string): Promise<IRecipes[]> {
    return await this.recipeModel.findAll({
      where: {
        name: {
          [Op.iLike]: `${letter}%`
        }
      }
    });
  }
}