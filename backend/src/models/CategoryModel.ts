import ICategory from '../interfaces/categories/ICategory';
import SequelizeCategory from '../database/models/SequelizeCategory';

export default class CategoryModel {
  private model = SequelizeCategory;

  async getAll(type: string): Promise<ICategory[]> {
    const categories = await this.model.findAll({ where: { type } });
    return categories;
  }
}
