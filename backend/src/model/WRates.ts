import database from '../database';
import WRates from '../types/WRate';

class WRate {
  async createRate(r: WRates): Promise<WRates[]> {
    try {
      const connection = await database.connect();
      const sql =
        'INSERT INTO work_rates (user_id, work_id, rate_date, rate_number) VALUES ($1, $2, $3, $4) RETURNING *';
      const result = await connection.query(sql, [
        r.user_id,
        r.work_id,
        r.rate_date,
        r.rate_number
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt create rate. Error ${(err as Error).message}`);
    }
  }

  async getRate(r: WRates): Promise<WRates[]> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT * FROM work_rates WHERE work_id=$1';
      const result = await connection.query(sql, [r.work_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt get rate. Error ${(err as Error).message}`);
    }
  }

  async updateRate(r: WRates): Promise<WRates[]> {
    try {
      const connection = await database.connect();
      const sql =
        'UPDATE work_rates SET rate_number=$1 WHERE rate_id=$2 RETURNING *';
      const result = await connection.query(sql, [r.rate_number, r.rate_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt create rate. Error ${(err as Error).message}`);
    }
  }

  async deleteRate(r: WRates): Promise<WRates[]> {
    try {
      const connection = await database.connect();
      const sql = 'DELETE FROM work_rates WHERE rate_id=$1 RETURNING *';
      const result = await connection.query(sql, [r.rate_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could'nt delete rate. Error ${(err as Error).message}`);
    }
  }
}
export default WRate;
