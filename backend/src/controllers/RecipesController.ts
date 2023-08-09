import { Request, Response } from 'express';
import RecipesService from '../services/RecipesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class RecipesController {
  constructor (private recipesService = new RecipesService()) {}

  public async getAllRecipes(req: Request, res: Response) {
    if (!req.query.q) {
      console.log('teste');
      const serviceResponse = await this.recipesService.getAllRecipes(res.locals.type);
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    const query = String(req.query.q);
    const serviceResponse = await this.recipesService.findByName(query, res.locals.type);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}