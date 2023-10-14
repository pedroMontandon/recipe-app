import { Identifiable } from '../interfaces';

interface ITokenUtil<T> {
  sign(payload: T): string;
  verify(token: string): T;  
}

export type Payload = { id: Identifiable['id'], email: string, username: string };

export default ITokenUtil;
