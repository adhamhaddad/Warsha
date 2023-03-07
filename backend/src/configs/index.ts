import dotenv from 'dotenv';

dotenv.config();

const configs = {
  port: Number(process.env.PORT),
  host: process.env.HOST,
  db_host: process.env.POSTGRES_URI,
  db_port: Number(process.env.POSTGRES_PORT),
  db_name: process.env.POSTGRES_DB,
  db_user: process.env.POSTGRES_USER,
  db_password: process.env.POSTGRES_PASSWORD,
  salt: Number(process.env.SALT),
  peper: process.env.PEPER
};
export default configs;
