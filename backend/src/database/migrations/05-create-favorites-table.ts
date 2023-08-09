import { DataTypes, Model, QueryInterface } from 'sequelize';
import IFavorite from '../../interfaces/favorites/IFavorite';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IFavorite>>(
      'favorites',
      {
        userId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          field: 'user_id',
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        recipeId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          field: 'recipe_id',
          references: {
            model: 'recipes',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      },
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('favorites');
  },
};
