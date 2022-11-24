import database from '../database';
import Works from '../types/Work';

class Work {
  async createWork(w: Works): Promise<Works[]> {
    try {
      const connection = await database.connect();
      const sql = `
            INSERT INTO works
            (user_id, work_title, work_picture, work_date)
            VALUES
            ($1, $2, $3, $4)
            RETURNING *
            `;
      const result = await connection.query(sql, [
        w.user_id,
        w.work_title,
        w.work_picture,
        new Date()
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt create work. Error ${(err as Error).message}`);
    }
  }

  async getWork(w: Works): Promise<Works[]> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT * FROM works WHERE user_id=$1';
      const result = await connection.query(sql, [w.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt get work. Error ${(err as Error).message}`);
    }
  }

  async updateWork(w: Works): Promise<Works[]> {
    try {
      const connection = await database.connect();
      const sql = `
            UPDATE works SET
            work_title=$1
            WHERE work_id=$2
            RETURNING *
            `;
      const result = await connection.query(sql, [w.work_title, w.work_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt update work. Error ${(err as Error).message}`);
    }
  }

  async deleteWork(w: Works): Promise<Works[]> {
    try {
      const connection = await database.connect();
      const sql = `DELETE FROM works WHERE work_id=$1 RETURNING *`;
      const result = await connection.query(sql, [w.work_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt delete work. Error ${(err as Error).message}`);
    }
  }
}
export default Work;
