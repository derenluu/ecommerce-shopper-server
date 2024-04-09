import 'dotenv/config';

export const env = {
  AUTHOR: process.env.AUTHOR,

  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,

  MONGODB_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME,

  JWT_KEY: process.env.JWT_KEY,
  JWT_EXPIRES: process.env.JWT_EXPIRES,
};
