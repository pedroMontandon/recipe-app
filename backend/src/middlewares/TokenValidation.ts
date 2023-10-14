import JwtUtils from '../utils/JwtUtils';
import ITokenUtil, { Payload } from '../interfaces/ITokenUtil';
import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TokenValidation {
  private tokenValidator: ITokenUtil<Payload>;
  constructor(validator: ITokenUtil<Payload> = new JwtUtils()) {
    this.tokenValidator = validator;
  }

  public validate(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (!token) return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Token not found' });
      const user = this.tokenValidator.verify(token);
      res.locals.user = user;
      next();
    } catch (error) {
      console.log(error);
      return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Invalid token' });
    }
  }
}
