import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'allexpress_admin',
  password: process.env.MYSQL_ROOT_PASSWORD || 'OvPie7fOi8A8jbCcJZdW',
  database: process.env.DB_NAME || 'recipes_db',
  host: process.env.DB_HOST || 'recipe-app-db.cmco3eo7uytp.sa-east-1.rds.amazonaws.com',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  // dialectOptions: {
  //   type: 'host',
  //   database: process.env.DB_NAME || 'recipes_db',
  //   user: process.env.DB_USER || 'allexpress_admin',
  //   address: process.env.DB_HOST || 'recipe-app-db.cmco3eo7uytp.sa-east-1.rds.amazonaws.com',
  //   method: 'password',
  // },
  logging: true,
};

export = config;