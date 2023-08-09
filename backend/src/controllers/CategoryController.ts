import { Request, Response } from 'express';
import CategoryService from '../services/CategoryService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class CategoryController {
  private service: CategoryService;

  constructor(s: CategoryService = new CategoryService()) {
    this.service = s;
  }

  public async getAll(_req: Request, res: Response) {
    const { type } = res.locals;
    const { status, data } = await this.service.getAll(type);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getRecipesByCategory(req: Request, res: Response) {
    const { type } = res.locals;
    const { q } = req.query;
    const { status, data } = await this.service.getRecipesByCategory(q as string, type);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
