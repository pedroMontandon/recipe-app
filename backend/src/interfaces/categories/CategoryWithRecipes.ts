import { IRecipes } from '../recipes/IRecipes';
import ICategory from './ICategory';

interface CategoryWithRecipes extends ICategory {
  recipes: IRecipes[];
}

export default CategoryWithRecipes;
