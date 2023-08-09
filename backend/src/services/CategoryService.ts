import ICategory from '../interfaces/categories/ICategory';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import CategoryModel from '../models/CategoryModel';

export default class CategoryService {
  private model: CategoryModel;

  constructor(m: CategoryModel = new CategoryModel()) {
    this.model = m;
  }

  public async getAll(type: string): Promise<ServiceResponse<ICategory[]>> {
    try {
      const categories = await this.model.getAll(type);
      return { status: 'SUCCESSFUL', data: categories };
    } catch (error) {
      console.log(error);
      
      return { status: 'INTERNAL_SERVER_ERROR', data: { message: 'Internal server error' } };
    }
  }
}
