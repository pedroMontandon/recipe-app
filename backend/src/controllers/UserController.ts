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

  async signUp (req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const token = await this.userService.signUp(user);
    return res.status(mapStatusHTTP(token.status)).json(token.data);
  }

  async activateAccount (req: Request, res: Response): Promise<Response> {
    const { id, activationCode } = req.params;
    if(!Number(id)) return res.status(400).json({ message: 'Invalid id' });
    const token = await this.userService.activateAccount(+id, activationCode);
    return res.status(mapStatusHTTP(token.status)).json(token.data);
  }
}