import { ServiceResponse } from '../interfaces/ServiceResponse';
import UserModel from '../models/UserModel';
import JwtUtils from '../utils/JwtUtils';
import { Token } from '../interfaces';
import * as bcrypt from 'bcryptjs';
import { emailQueue } from './QueueService';
import buildActivationUrl from '../utils/activationUrlBuilder';
import activationCodeGenerator from '../utils/activationCodeGenerator';

export default class UserService {
  constructor (private userModel = new UserModel()) {}
  private jwtUtils = new JwtUtils();

  async login (email: string, password: string): Promise<ServiceResponse<Token>> {
    const user = await this.userModel.findByEmail(email);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return { status: 'INVALID_DATA', data: { message: 'Invalid password' } };
    const token = this.jwtUtils.sign({ id: user.id, email: user.email, username: user.username });
    return { status: 'SUCCESSFUL', data: { token } };
  }
}