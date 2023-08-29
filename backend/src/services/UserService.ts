import { ServiceResponse } from '../interfaces/ServiceResponse';
import UserModel from '../models/UserModel';
import JwtUtils from '../utils/JwtUtils';
import { NewEntity, Token } from '../interfaces';
import * as bcrypt from 'bcryptjs';
import { emailQueue } from './QueueService';
import buildActivationUrl from '../utils/activationUrlBuilder';
import activationCodeGenerator from '../utils/activationCodeGenerator';
import { IUser } from '../interfaces/users/IUser';

export default class UserService {
  constructor (private userModel = new UserModel()) {}
  private jwtUtils = new JwtUtils();

  async login (email: string, password: string): Promise<ServiceResponse<Token>> {
    const user = await this.userModel.findByEmail(email);
    if (!user) return { status: 'INVALID_DATA', data: { message: 'Invalid email or password' } };
    if (!user.activated) return { status: 'UNAUTHORIZED', data: { message: 'User not activated' } };
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return { status: 'INVALID_DATA', data: { message: 'Invalid email or password' } };
    const token = this.jwtUtils.sign({ id: user.id, email: user.email, username: user.username });
    return { status: 'SUCCESSFUL', data: { token } };
  }

  async signUp (user: NewEntity<IUser>) {
    const { email, username } = user;
    const existingUser = await this.userModel.findByEmail(email);
    if (existingUser) return { status: 'CONFLICT', data: { message: 'User already exists' } };
    const activationCode = activationCodeGenerator.generateActivationCode();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await this.userModel.create({ email, username: user.username, password: hashedPassword, activationCode, activated: false });
    emailQueue.add({ method: 'activationCode', email, username, activationCode: buildActivationUrl({ id: newUser.id, activationCode}) });
    return { status: 'CREATED', data: { message: `${newUser.username} has been created. Check your email to activate it`} };
  }

  async activateAccount (id: number, activationCode: string) {
    const user = await this.userModel.findById(id);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    if (user.activationCode !== activationCode) return { status: 'INVALID_DATA', data: { message: 'Invalid activation code' } };
    await this.userModel.update(id, { activated: true });
    return { status: 'SUCCESSFUL', data: { message: `${user.username} has been activated`} };
  }
}