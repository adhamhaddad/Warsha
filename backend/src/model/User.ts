import database from '../database';
import configs from '../configs';
import Users from '../types/User';
import bcrypt from 'bcrypt';

const hash = (password: string) =>
  bcrypt.hashSync(`${password}${configs.peper}`, configs.salt);

class User {
  async createUser(u: Users): Promise<Users[]> {
    try {
      const connection = await database.connect();
      const sql = `
        INSERT INTO Users
        (id_card, first_name, middle_name, last_name, email, phone_number, password, account_type, joined)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING
        first_name, last_name, email, account_type
        `;
      const result = await connection.query(sql, [
        u.id_card,
        u.first_name,
        u.middle_name,
        u.last_name,
        u.email,
        u.phone_number,
        hash(u.password),
        u.account_type,
        u.joined
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt create user. Error ${(err as Error).message}`);
    }
  }

  async getUser(u: Users): Promise<Users[]> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT * FROM users WHERE user_id=$1';
      const result = await connection.query(sql, [u.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt get user. Error ${(err as Error).message}`);
    }
  }

  async getUsers(): Promise<Users[]> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT * FROM users';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could'nt get users. Error ${(err as Error).message}`);
    }
  }

  // Updates
  async update(u: Users): Promise<Users[]> {
    try {
      const connection = await database.connect();
      const sql = 'DELETE FROM users WHERE user_id=$1 RETURNING *';
      const result = await connection.query(sql, [u.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt delete user. Error ${(err as Error).message}`);
    }
  }

  async resetPassword(u: Users): Promise<Users[]> {
    try {
      const connection = await database.connect();
      const sql = 'DELETE FROM users WHERE user_id=$1 RETURNING *';
      const result = await connection.query(sql, [u.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt delete user. Error ${(err as Error).message}`);
    }
  }

  async deleteUser(u: Users): Promise<Users[]> {
    try {
      const connection = await database.connect();
      const sql = 'DELETE FROM users WHERE user_id=$1 RETURNING *';
      const result = await connection.query(sql, [u.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt delete user. Error ${(err as Error).message}`);
    }
  }

  async authenticate(u: Users): Promise<Users[] | null> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT password FROM users WHERE email=$1 RETURNING *';
      const result = await connection.query(sql, [u.email, u.password]);
      if (result.rows.length) {
        const password = result.rows[0].password;
        const checkPass = bcrypt.compareSync(
          `${u.password}${configs.peper}`,
          password
        );
        if (checkPass) {
          const sql =
            'SELECT first_name, last_name, email, account_type, FROM users WHERE email=$1';
          const result = await connection.query(sql, [u.email]);
          connection.release();
          return result.rows[0];
        } else {
          connection.release();
          throw new Error('Password is Incorrect.');
        }
      }
      connection.release();
      return null;
    } catch (err) {
      throw new Error(`Could'nt delete user. Error ${(err as Error).message}`);
    }
  }
}
export default User;
