// pages/api/handleaddlogin.js
import pool from '../../../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

export default async function handleaddlogin(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide all values' });
  }

  const userQuery = `
    SELECT * FROM "admin" WHERE "username" = $1
  `;

  console.log(username)
  try {
    const client = await pool.connect();
    const userResult = await client.query(userQuery, [username]);
    const user = userResult.rows[0];

    // Log the user details
    

    if (!user) {
      client.release();
      return res.status(StatusCodes.NOT_FOUND).json({ error: `No ${username} can be found` });
    }
    console.log(user.password);
    const comparePassword = async (candidatePassword) => {
      const isMatch = await bcrypt.compare(candidatePassword, user.password);
      return isMatch;
    };

    const isPasswordCorrect = await comparePassword(password);
    console.log(isPasswordCorrect)
    if (!isPasswordCorrect) {
      client.release();
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.user_id, user: user.UserName },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_LIFETIME }
    );

    client.release();
    console.log(user)
    res.status(StatusCodes.OK).json({
      userId: user.admin_id,
      name: user.username,
      role: user.role,
      email: user.email,
      token,
    });
  } catch (err) {
    console.error('Database Query Error:', err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
}