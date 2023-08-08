import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IUser } from '../../interfaces/users/IUser';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IUser>>('users', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activationCode: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'activation_code',
      },
      activated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('users');
  }   
};