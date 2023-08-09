import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';
import SequelizeCategory from './SequelizeCategory';
import SequelizeArea from './SequelizeArea';

class SequelizeRecipe extends Model<InferAttributes<SequelizeRecipe>, InferCreationAttributes<SequelizeRecipe>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare type: 'Drinks' | 'Meals';
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
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize: db,
    modelName: 'recipes',
    underscored: true,
    timestamps: false,
  }
);

SequelizeRecipe.belongsTo(SequelizeCategory, { foreignKey: 'categoryId', as: 'category', targetKey: 'id' });
SequelizeCategory.belongsTo(SequelizeRecipe, { foreignKey: 'categoryId', as: 'recipes', targetKey: 'id' });

SequelizeRecipe.belongsTo(SequelizeArea, { foreignKey: 'categoryId', as: 'area', targetKey: 'id' });
SequelizeArea.belongsTo(SequelizeRecipe, { foreignKey: 'categoryId', as: 'recipes', targetKey: 'id' });

export default SequelizeRecipe;
