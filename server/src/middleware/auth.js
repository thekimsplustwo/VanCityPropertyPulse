import passport from 'passport';
import jwt from 'jsonwebtoken';
import { getUserInfoByEmail } from '../models/user.js';
import { users } from '../data/data.js';
import generateToken from '../utils/token.js';

const { FRONT_REDIRECT_URL, FRONT_URL, SERVER_REDIRECT_URL, TEST_USER_EMAIL } =
  process.env;

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    //res.redirect(301, FRONT_URL);
    return res.status(401).json({ url: FRONT_URL });
  }
};

export const isNotLoggedIn = (req, res, next) => {
  if (process.env.AUTH !== 'on') {
    const token = generateToken(TEST_USER_EMAIL);
    return res.redirect(301, `${FRONT_REDIRECT_URL}?token=${token}`);
  }
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect(301, FRONT_REDIRECT_URL);
  }
};

export const verifyToken = async (req, res, next) => {
  if (process.env.AUTH !== 'on') {
    req.user = users.find(user => user.email === TEST_USER_EMAIL);
    next();
  } else {
    try {
      if (!(req.session.passport && req.isAuthenticated())) {
        return res.status(401).json({ url: FRONT_URL });
      }
      const token = req.session.passport.user;
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const { email } = decodedToken;
      //const email = req.session.passport.user;
      const user = await getUserInfoByEmail(email);
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

export const googleCallback = (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/auth/login/google');
    }
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      res.set('x-token', user.token);
      return res
        .status(200)
        .redirect(`${FRONT_REDIRECT_URL}?token=${user.token}`);
    });
  })(req, res, next);
};
