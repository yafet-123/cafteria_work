import pool from '../../../db.js';
import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

export default async function handlesearchadmin(req, res) {
  const { password, token } = req.body;

  if (!password || !token) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide both password and token' });
  }

  const findUserQuery = `
    SELECT * FROM "admin" WHERE "resetToken" = $1
  `;

  const updatePasswordQuery = `
    UPDATE "admin"
    SET "Password" = $1, "resetToken" = NULL
    WHERE "resetToken" = $2
  `;

  try {
    const client = await pool.connect();
    const userResult = await client.query(findUserQuery, [token]);
    const user = userResult.rows[0];

    if (!user) {
      client.release();
      return res.status(StatusCodes.BAD_REQUEST).json({ status: 'Invalid or expired reset token.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    await client.query(updatePasswordQuery, [hashedPassword, token]);

    client.release();
    return res.status(StatusCodes.OK).json({ status: 'Password Reset Success' });
  } catch (error) {
    console.error('Database Query Error:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
}
