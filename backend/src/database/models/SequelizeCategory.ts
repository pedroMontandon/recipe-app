import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';

class SequelizeCategory extends Model<InferAttributes<SequelizeCategory>, InferCreationAttributes<SequelizeCategory>>{
  declare id: CreationOptional<number>;
  declare name: string;
  declare type: 'Meals' | 'Drinks';
}

SequelizeCategory.init(
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
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'categories',
    underscored: true,
    timestamps: false,
  }
);

export default SequelizeCategory;
