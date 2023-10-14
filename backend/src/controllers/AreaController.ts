import { Request, Response } from 'express';
import AreaService from '../services/Areaservice';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class AreaController {
  private service: AreaService;

  constructor(s: AreaService = new AreaService()) {
    this.service = s;
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.service.getAll();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}