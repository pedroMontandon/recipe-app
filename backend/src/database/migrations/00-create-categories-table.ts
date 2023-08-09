import { DataTypes, Model, QueryInterface } from 'sequelize';
import ICategory from '../../interfaces/categories/ICategory';

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.createTable<Model<ICategory>>(
    'categories',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.dropTable('categories'),
};
