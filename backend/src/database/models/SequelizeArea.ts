import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';

class SequelizeArea extends Model<InferAttributes<SequelizeArea>, InferCreationAttributes<SequelizeArea>>{
  declare id: CreationOptional<number>;
  declare name: string;
  // declare type: 'Meals' | 'Drinks';
}

SequelizeArea.init(
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
    // type: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // }
  },
  {
    sequelize: db,
    modelName: 'areas',
    underscored: true,
    timestamps: false,
  }
);

export default SequelizeArea;
