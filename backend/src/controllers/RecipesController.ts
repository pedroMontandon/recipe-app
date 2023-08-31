import { Request, Response } from 'express';
import RecipesService from '../services/RecipesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class RecipesController {
  constructor (private recipesService = new RecipesService()) {}

  public async getAllRecipes(req: Request, res: Response) {
    if (!req.query.q) {
      const serviceResponse = await this.recipesService.getAllRecipes(res.locals.type);
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    const query = String(req.query.q);
    const serviceResponse = await this.recipesService.findByName(query, res.locals.type);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getByFirstLetter(req: Request, res: Response) {
    const query = String(req.query.q);
    const serviceResponse = await this.recipesService.findByFirstLetter(query, res.locals.type);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getById(req: Request, res: Response) {
    const { status, data } = await this.recipesService.findByPk(req.params.id, res.locals.type);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async random(req: Request, res: Response) {
    const { limit } = req.query;
    const { type } = res.locals;
    const { status, data } = await this.recipesService.random(limit as string, type);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async create(req: Request, res: Response) {
    const { status, data } = await this.recipesService.create(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}