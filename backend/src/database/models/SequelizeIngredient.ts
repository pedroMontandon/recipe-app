import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
  
class SequelizeIngredient extends Model<InferAttributes<SequelizeIngredient>, InferCreationAttributes<SequelizeIngredient>> {
  declare id: CreationOptional<number>;
  declare name: string;
}

SequelizeIngredient.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'ingredients',
  timestamps: false,
  underscored: true,
});

export default SequelizeIngredient;