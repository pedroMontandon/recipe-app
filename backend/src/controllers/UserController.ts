import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor (private userService = new UserService()) {}
  async login (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const token = await this.userService.login(email, password);
    return res.status(mapStatusHTTP(token.status)).json(token.data);
  }
}