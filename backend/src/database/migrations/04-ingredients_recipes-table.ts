import { DataTypes, Model, QueryInterface } from 'sequelize';
import IIngredientRecipe from '../../interfaces/ingredients-recipes/IIngredientRecipe';

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.createTable<Model<IIngredientRecipe>>(
    'ingredients_recipes',
    {
      recipeId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
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
        primaryKey: true,
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
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.dropTable(
    'ingredients_recipes'
  ),
};
