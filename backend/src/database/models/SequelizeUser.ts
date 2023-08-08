import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';

  class SequelizeUser extends Model<InferAttributes<SequelizeUser>, InferCreationAttributes<SequelizeUser>> {
    declare id: CreationOptional<number>;
    declare username: string;
    declare email: string;
    declare password: string;
  }
  
  SequelizeUser.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    }, {
      sequelize: db,
      modelName: 'user',
      timestamps: false,
      underscored: true,
    });

    export default SequelizeUser;