import database from '../database';
import Info from '../types/Information';

class Information {
  async createInfo(i: Info): Promise<Info[]> {
    try {
      const connection = await database.connect();
      const sql = `
            INSERT INTO information
            (user_id, address, city, street, postal_code)
            VALUES
            ($1, $2, $3, $4, $5)
            RETURNING *
            `;
      const result = await connection.query(sql, [
        i.user_id,
        i.address,
        i.city,
        i.street,
        i.postal_code
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt create the information. Error ${(err as Error).message}`
      );
    }
  }

  async getInfo(i: Info): Promise<Info[]> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT * FROM information WHERE user_id=$1';
      const result = await connection.query(sql, [i.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt get the information. Error ${(err as Error).message}`
      );
    }
  }

  async updateInfo(i: Info): Promise<Info[]> {
    try {
      const connection = await database.connect();
      const sql = `
        UPDATE information SET
        address=$1, city=$2, street=$3, postal_code=$4
        RETURNING *
        `;
      const result = await connection.query(sql, [
        i.address,
        i.city,
        i.street,
        i.postal_code
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt update the information. Error ${(err as Error).message}`
      );
    }
  }

  async deleteInfo(i: Info): Promise<Info[]> {
    try {
      const connection = await database.connect();
      const sql = `DELETE FROM information WHERE user_id=$1 RETURNING *`;
      const result = await connection.query(sql, [i.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt delete the information. Error ${(err as Error).message}`
      );
    }
  }
}
export default Information;
