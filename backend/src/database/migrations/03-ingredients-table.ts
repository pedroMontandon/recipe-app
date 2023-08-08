import { DataTypes, Model, QueryInterface } from 'sequelize';
import IIngredient from '../../interfaces/ingredients/IIngredient';

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.createTable<Model<IIngredient>>(
    'ingredients',
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
      }
    },
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.dropTable('ingredients'),
};
