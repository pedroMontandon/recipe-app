import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IRecipes } from '../../interfaces/recipes/IRecipes';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IRecipes>>('recipes', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      areaId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        field: 'area_id',
        references: {
          model: 'areas',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      instructions: {
        type: DataTypes.STRING(5000),
        allowNull: false,
      },
      thumb: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      youtube: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('recipes');
  }   
};