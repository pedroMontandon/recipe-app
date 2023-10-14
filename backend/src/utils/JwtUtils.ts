import * as jwt from 'jsonwebtoken';
import ITokenUtil from '../interfaces/ITokenUtil';
import { Payload } from '../interfaces/ITokenUtil';

export default class JwtUtils implements ITokenUtil<Payload> {
  private jwtSecret = process.env.JWT_SECRET || 'secret';

  sign(payload: Payload): string {
    return jwt.sign(payload, this.jwtSecret);
  }

  verify(token: string): Payload {
    const bearerNToken = token.split(' ');
    return jwt.verify(bearerNToken[1], this.jwtSecret) as Payload;
  }

  decode(token: string): Payload {
    const bearerNToken = token.split(' ');
    return jwt.decode(bearerNToken[1]) as Payload;
  }
}