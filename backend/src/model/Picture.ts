import database from '../database';
import Pictures from '../types/Picture';

class Picture {
  async createPicture(p: Pictures): Promise<Pictures[]> {
    try {
      const connection = await database.connect();
      const sql =
        'INSERT INTO pictures (user_id, profile_picture, cover_picture) VALUES ($1, $2, $3) RETURNING *';
      const result = await connection.query(sql, [
        p.user_id,
        p.profile_picture,
        p.cover_picture
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt create the picture. Error ${(err as Error).message}`
      );
    }
  }

  async getPictures(p: Pictures): Promise<Pictures[]> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT * FROM pictures WHERE user_id=$1';
      const result = await connection.query(sql, [p.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt update the picture. Error ${(err as Error).message}`
      );
    }
  }

  async updateCover(p: Pictures): Promise<Pictures[]> {
    try {
      const connection = await database.connect();
      const sql =
        'UPDATE pictures set cover_picture=$1 WHERE user_id=$2 RETURNING *';
      const result = await connection.query(sql, [p.cover_picture, p.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt update the picture. Error ${(err as Error).message}`
      );
    }
  }

  async updateProfile(p: Pictures): Promise<Pictures[]> {
    try {
      const connection = await database.connect();
      const sql =
        'UPDATE pictures SET profile_picture=$1 WHERE user_id=$2 RETURNING *';
      const result = await connection.query(sql, [
        p.profile_picture,
        p.user_id
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt update the picture. Error ${(err as Error).message}`
      );
    }
  }

  async deletePicture(p: Pictures): Promise<Pictures[]> {
    try {
      const connection = await database.connect();
      const sql = 'DELETE FROM pictures WHERE user_id=$1 RETURNING *';
      const result = await connection.query(sql, [p.user_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt delete the picture. Error ${(err as Error).message}`
      );
    }
  }
}
export default Picture;
