import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';
import SequelizeCategory from './SequelizeCategory';
import SequelizeArea from './SequelizeArea';
import SequelizeIngredient from './SequelizeIngredient';
import SequelizeIngredientsRecipes from './SequelizeIngredientsRecipes';

class SequelizeRecipe extends Model<InferAttributes<SequelizeRecipe>, InferCreationAttributes<SequelizeRecipe>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare type: string;
  declare categoryId: number;
  declare areaId: number;
  declare instructions: string;
  declare thumb: string;
  declare tags: string;
  declare youtube: string;
}

SequelizeRecipe.init(
  {
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
      type: DataTypes.INTEGER.UNSIGNED ,
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
      type: DataTypes.STRING(1500),
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    youtube: {
      type: DataTypes.STRING(1500),
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'recipes',
    underscored: true,
    timestamps: false,
  }
);

SequelizeRecipe.belongsTo(SequelizeCategory, { foreignKey: 'categoryId', as: 'category', targetKey: 'id' });
SequelizeCategory.hasMany(SequelizeRecipe, { foreignKey: 'categoryId', as: 'recipes' });

SequelizeRecipe.belongsTo(SequelizeArea, { foreignKey: 'categoryId', as: 'area', targetKey: 'id' });
SequelizeArea.hasMany(SequelizeRecipe, { foreignKey: 'categoryId', as: 'recipes' });

SequelizeIngredient.belongsToMany(
  SequelizeRecipe,
  {
    through: SequelizeIngredientsRecipes,
    as: 'recipes',
    foreignKey: 'ingredientId',
    otherKey: 'recipeId',
  }
);

SequelizeRecipe.belongsToMany(
  SequelizeIngredient,
  {
    through: SequelizeIngredientsRecipes,
    as: 'ingredients',
    foreignKey: 'recipeId',
    otherKey: 'ingredientId',
  }
);

export default SequelizeRecipe;
