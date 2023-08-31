import { NewEntity } from '..';
import { IRecipes } from './IRecipes';

interface CreateRecipePayload extends NewEntity<IRecipes> {
  ingredients: { id: number, measure: string }[];
}

export default CreateRecipePayload;
