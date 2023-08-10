import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import IngredientService from '../services/IngredientService';

export default class IngredientController {
  constructor (private ingredientService = new IngredientService()) {}
  
  async getByIngredient (req: Request, res: Response): Promise<Response> {
    const { q } = req.query;
    const { status, data } = await this.ingredientService.getByQuery(q ? q as string : '');
    return res.status(mapStatusHTTP(status)).json(data); 
  }
}