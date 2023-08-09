import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';
import SequelizeRecipe from './SequelizeRecipe';
import SequelizeUser from './SequelizeUser';

class SequelizeFavorite extends Model<InferAttributes<SequelizeFavorite>, InferCreationAttributes<SequelizeFavorite>>{
  declare userId: number;
  declare recipeId: number;
}

SequelizeFavorite.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      field: 'user_id',
      references: {
        model: 'user',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    recipeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      field: 'recipe_id',
      references: {
        model: 'recipes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize: db,
    modelName: 'favorites',
    underscored: true,
    timestamps: false,
  }
);

SequelizeRecipe.belongsToMany(
  SequelizeUser,
  {
    through: SequelizeFavorite,
    as: 'users',
    foreignKey: 'recipeId',
    otherKey: 'userId',
  },
);

SequelizeFavorite.belongsToMany(
  SequelizeRecipe,
  {
    through: SequelizeFavorite,
    as: 'favorites',
    foreignKey: 'userId',
    otherKey: 'favoriteId',
  },
);

export default SequelizeFavorite;
