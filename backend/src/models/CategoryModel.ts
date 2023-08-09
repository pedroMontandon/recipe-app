import ICategory from '../interfaces/categories/ICategory';
import SequelizeCategory from '../database/models/SequelizeCategory';
import { Op } from 'sequelize';
import SequelizeRecipe from '../database/models/SequelizeRecipe';

export default class CategoryModel {
  private model = SequelizeCategory;

  async getAll(type: string): Promise<ICategory[]> {
    const categories = await this.model.findAll({ where: { type } });
    return categories;
  }

  async getRecipesByCategory(name: string, type: string): Promise<ICategory | null> {
    const category = await this.model.findOne({
      include: { model: SequelizeRecipe, as: 'recipes' },
      where: { name: { [Op.like]: `%${name}%` }, type },
    });
    return category;
  }
}
