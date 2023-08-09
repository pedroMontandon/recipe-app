import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';

class SequelizeRecipe extends Model<InferAttributes<SequelizeRecipe>, InferCreationAttributes<SequelizeRecipe>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare type: 'Drinks' | 'Meals';
  declare category: string;
  declare area: string;
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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
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
  },
  {
    sequelize: db,
    modelName: 'recipes',
    underscored: true,
    timestamps: false,
  }
);

export default SequelizeRecipe;
