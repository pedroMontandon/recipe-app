import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeIngredientsRecipes extends Model<
  InferAttributes<SequelizeIngredientsRecipes>,
  InferCreationAttributes<SequelizeIngredientsRecipes>
> {
  declare id: CreationOptional<number>;
  declare recipeId: number;
  declare ingredientId: number;
  declare measure: string;
}

SequelizeIngredientsRecipes.init ({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  recipeId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    field: 'recipe_id',
    references: {
      model: 'recipes',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  ingredientId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    field: 'ingredient_id',
    references: {
      model: 'ingredients',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  measure: {
    type: DataTypes.STRING,
    allowNull: true,
  }
},
{
  sequelize: db,
  modelName: 'ingredients_recipes',
  timestamps: false,
  underscored: true
});

export default SequelizeIngredientsRecipes;