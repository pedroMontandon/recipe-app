import { IRecipes } from '../recipes/IRecipes';
import IIngredient from './IIngredient';

interface IIngredientRecipes extends IIngredient {
  recipes: IRecipes[]  
}

export default IIngredientRecipes;