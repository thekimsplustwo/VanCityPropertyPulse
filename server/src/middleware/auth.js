import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getUserInfoByEmail } from '../models/user.js';

dotenv.config();

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //bearer
    //const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.email;
    const user = await getUserInfoByEmail(userId);
    if (!user) {
      res.status(401).send('Unauthorized');
    } else {
      req.token = token;
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
    next(error);
  }
};
