import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as model from '../models/index.js';
import { findByEmail } from '../models/user.js';

dotenv.config();

const { MOCK } = process.env;
const { SECRET_KEY } = process.env;

dotenv.config();

// const userModel = MOCK ? model.mockUserModel : model.userModel;

export const verifyToken = async (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(' ')[1]; //bearer
    // const email = token;
    // const token = req.headers.authorization;
    // const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    // const { email } = decodedToken;
    console.log('req.session: ', req.session);
    console.log('req.user: ', req.user);
    const email = req.session.passport.user;
    // const token = req.user.accessToken;
    console.log('email: ', email);
    const user = await findByEmail(email);
    console.log('user: ', user);
    if (!user) {
      res.status(401).send('Unauthorized');
    } else {
      req.token = req.user.token;
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
    next(error);
  }
};
