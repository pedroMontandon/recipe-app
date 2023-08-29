import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.DB_NAME || 'recipes_db',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  logging: true,
};

export = config;