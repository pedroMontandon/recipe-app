import { DataTypes, Model, QueryInterface } from 'sequelize';
import IArea from '../../interfaces/areas/IArea';

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.createTable<Model<IArea>>(
    'areas',
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
    }
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.dropTable('areas'),
};
