import { IRecipes } from '../interfaces/recipes/IRecipes';
import CategoryWithRecipes from '../interfaces/categories/CategoryWithRecipes';
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
      return { status: 'INTERNAL_SERVER_ERROR', data: { message: 'Internal server error' } };
    }
  }

  public async getRecipesByCategory(name: string, type: string): Promise<ServiceResponse<IRecipes[]>> {
    try {
      const category = await this.model.getRecipesByCategory(name, type) as CategoryWithRecipes;
      if (!category) return { status: 'NOT_FOUND', data: { message: 'Category not found' } };
      return { status: 'SUCCESSFUL', data: category.recipes }; 
    } catch (error) {
      return { status: 'INTERNAL_SERVER_ERROR', data: { message: 'Internal server error' } };
    }
  }
}
