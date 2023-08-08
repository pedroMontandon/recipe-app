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

  async update(id: number, patchedUser: NewEntity<IUser>): Promise<IUser | null> {
    const newUser = await this.userModel.update(patchedUser, { where: { id } });
    if (!newUser) return null;
    return { id, ...patchedUser };
  }

  async delete(id: number): Promise<number> {
    return await this.userModel.destroy({ where: { id } });
  }
}