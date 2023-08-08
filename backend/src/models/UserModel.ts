import { NewEntity } from '../interfaces';
import SequelizeUser from '../database/models/SequelizeUser';
import { IUserModel } from '../interfaces/users/IUserModel';
import { IUser } from '../interfaces/users/IUser';

export default class UserModel implements IUserModel{
  private userModel = SequelizeUser;

  async create (user: NewEntity<IUser>): Promise<IUser> {
    return await this.userModel.create(user);
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.findAll();
  }

  async findById(id: number): Promise<IUser | null> {
    return await this.userModel.findByPk(id);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await this.userModel.findOne({ where: { email } });
  }

  async update(id: number, patchedUser: Partial<IUser>): Promise<IUser | null> {
    const user = await this.userModel.findByPk(id);
    if (!user) return null;
    await this.userModel.update(patchedUser, { where: { id } });
    return user;
  }

  async delete(id: number): Promise<number> {
    return await this.userModel.destroy({ where: { id } });
  }
}