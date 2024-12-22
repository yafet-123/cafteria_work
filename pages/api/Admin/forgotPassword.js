import pool from '../../../db.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { StatusCodes } from 'http-status-codes';

export default async function handleforgotpassword(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide an email address' });
  }

  const userQuery = `
    SELECT * FROM "admin" WHERE "email" = $1
  `;

  const updateTokenQuery = `
    UPDATE "admin"
    SET "resetToken" = $1
    WHERE "email" = $2
  `;

  try {
    const client = await pool.connect();
    const userResult = await client.query(userQuery, [email]);
    const oldUser = userResult.rows[0];

    if (!oldUser) {
      client.release();
      return res.status(StatusCodes.NOT_FOUND).json({ status: "user not found" });
    }

    const secret = process.env.JWT_SECRET + oldUser.Password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser.user_id }, secret, {
      expiresIn: '5m',
    });

    await client.query(updateTokenQuery, [token, email]);

    const link = `${process.env.LINK}/ResetPassword?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hulumedia12@gmail.com',
        pass: 'mkhvelqnhlpkznji',
      },
    });

    const mailOptions = {
      from: 'hulumedia12@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: link,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        client.release();
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        client.release();
        return res.status(StatusCodes.OK).json({ status: 'An Email has been sent to your email address' });
      }
    });
  } catch (err) {
    console.error('Database Query Error:', err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
}
