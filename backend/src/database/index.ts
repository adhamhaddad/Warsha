import { Pool } from 'pg';
import configs from '../configs';

const database = new Pool({
  host: configs.host,
  database: configs.db_name,
  user: configs.db_user,
  port: configs.db_port,
  password: configs.db_password
});
export default database;
