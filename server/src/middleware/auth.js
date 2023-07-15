import { findByEmail } from '../models/user.js';

export const verifyToken = async (req, res, next) => {
  try {
    const email = req.session.passport.user;
    const user = await findByEmail(email);
    console.log('The following user has been verified: ', user);
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
