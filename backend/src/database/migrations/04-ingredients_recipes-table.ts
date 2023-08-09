import { DataTypes, Model, QueryInterface } from 'sequelize';
import IIngredientRecipe from '../../interfaces/ingredients-recipes/IIngredientRecipe';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IIngredientRecipe>>(
      'ingredients_recipes',
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        recipeId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'recipe_id',
          references: {
            key: 'id',
            model: 'recipes',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        ingredientId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'ingredient_id',
          references: {
            key: 'id',
            model: 'ingredients',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        measure: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      }
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('ingredients_recipes');
  },
};
