import jwt from 'jsonwebtoken';
import { findByEmail } from '../models/user.js';
import { users } from '../data/data.js';

export const verifyToken = async (req, res, next) => {
  if (process.env.AUTH !== 'on') {
    req.user = users.find(user => user.email === 'johndoe@gmail.com');
    next();
  } else {
    try {
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
  }
};
