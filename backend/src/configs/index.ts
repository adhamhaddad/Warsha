import dotenv from 'dotenv';

dotenv.config();

const configs = {
  port: Number(process.env.PORT),
  host: process.env.HOST,
  db_user: process.env.DB_USERNAME,
  db_name: process.env.DB_NAME,
  db_port: Number(process.env.DB_PORT),
  db_password: process.env.DB_PASSWORD,
  token: process.env.SECRET_TOKEN,
  salt: Number(process.env.SALT),
  peper: process.env.PEPER
};
export default configs;
