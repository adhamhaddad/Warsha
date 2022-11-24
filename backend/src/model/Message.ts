import database from '../database';
import Messages from '../types/Message';

class Message {
  async createMessage(m: Messages): Promise<Messages[]> {
    try {
      const connection = await database.connect();
      const sql = `
            INSERT INTO messages
            (sender_id, receiver_id, message_date, message_text, message_picture, message_video, message_status)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
            `;
      const result = await connection.query(sql, [
        m.sender_id,
        m.receiver_id,
        new Date(),
        m.message_text,
        m.message_picture,
        m.message_video,
        0
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt create message. Error ${(err as Error).message}`
      );
    }
  }

  async getMessages(m: Messages): Promise<Messages[]> {
    try {
      const connection = await database.connect();
      const sql = `
      SELECT DISTINCT
      u.user_id, u.first_name, u.last_name, p.profile_picture, m.*
      FROM
      messages m, users u, pictures p, rates r
      WHERE
      m.sender_id=$1 AND m.receiver_id=$2
      `;
      const result = await connection.query(sql, [m.sender_id, m.receiver_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt get the messages. Error ${(err as Error).message}`
      );
    }
  }

  async updateMessage(m: Messages): Promise<Messages[]> {
    try {
      const connection = await database.connect();
      const sql = `UPDATE messages SET message_text=$1 WHERE message_id=$2 RETURNING *`;
      const result = await connection.query(sql, [
        m.message_text,
        m.message_id
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt update message. Error ${(err as Error).message}`
      );
    }
  }

  async deleteMessage(m: Messages): Promise<Messages[]> {
    try {
      const connection = await database.connect();
      const sql = 'DELETE FROM messages WHERE message_id=$1 RETURNING *';
      const result = await connection.query(sql, [m.message_id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could'nt delete message. Error ${(err as Error).message}`
      );
    }
  }
}
export default Message;
