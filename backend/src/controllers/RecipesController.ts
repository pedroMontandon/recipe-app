import { Request, Response } from 'express';
import RecipesService from '../services/RecipesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class RecipesController {
  constructor (private recipesService = new RecipesService()) {}

  public async getAllRecipes(req: Request, res: Response) {
    if (!req.query) {
      const serviceResponse = await this.recipesService.getAllRecipes();
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  }
}