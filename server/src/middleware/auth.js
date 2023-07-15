import jwt from 'jsonwebtoken';
import { findByEmail } from '../models/user.js';

export const verifyToken = async (req, res, next) => {
  try {
    console.log('req.session ', req.session);
    console.log('req.session.passpoart ', req.session.passport);
    if (!req.session.passport) {
      return res.status(401).send('Unauthorized');
    }
    const token = req.session.passport.user;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const { email } = decodedToken;
    const user = await findByEmail(email);
    console.log('The following user has been verified: ', user);
    if (!user) {
      return res.status(401).send('Unauthorized');
    }
    req.token = req.user.token;
    req.user = user;
    next();
  } catch (error) {
    if (!res.headersSent) {
      res.status(error.statusCode || 400).json({ message: error.message });
    }
    next(error);
  }
};
