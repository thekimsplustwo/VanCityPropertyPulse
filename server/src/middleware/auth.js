import passport from 'passport';
import jwt from 'jsonwebtoken';
import { getUserInfoByEmail } from '../models/user.js';
import { users } from '../data/data.js';
import generateToken from '../utils/token.js';

const {
  FRONT_URL_DEPLOYED,
  FRONT_URL,
  TEST_USER_EMAIL,
  PROD,
  SECRET_KEY,
  AUTH,
} = process.env;

const REDIRECT_URL = PROD === 'on' ? FRONT_URL_DEPLOYED : FRONT_URL;

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    //res.redirect(301, FRONT_URL);
    return res.status(401).json({ url: REDIRECT_URL });
  }
};

export const isNotLoggedIn = (req, res, next) => {
  if (AUTH !== 'on') {
    const token = generateToken(TEST_USER_EMAIL);
    return res.redirect(301, `${REDIRECT_URL}?token=${token}`);
  }
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect(301, REDIRECT_URL);
  }
};

export const verifyToken = async (req, res, next) => {
  if (AUTH !== 'on') {
    req.user = users.find(user => user.email === TEST_USER_EMAIL);
    next();
  } else {
    try {
      const token = req.headers.authorization.split(' ')[1];
      //console.log('verifyToken ', token);
      if (!token) {
        return res.status(401).json({ url: REDIRECT_URL });
      }
      const decodedToken = jwt.verify(token, SECRET_KEY);
      const { email } = decodedToken;
      //const email = req.session.passport.user;
      const user = await getUserInfoByEmail(email);
      console.log('The following user has been verified: ', user);
      if (!user) {
        return res.status(401).send('Unauthorized');
      }
      res.header('Access-Control-Allow-Origin', REDIRECT_URL);
      req.token = token;
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
      console.error(err);
    } else if (!user) {
      res.redirect('/api/auth/login/google');
    } else {
      req.logIn(user, err => {
        if (err) {
          console.error(err);
        } else {
          next();
        }
      });
    }
  })(req, res, next);
};

export const sendUserToken = (req, res) => {
  if (req.user) {
    res.set('x-token', req.user.token);
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.redirect(`${REDIRECT_URL}?token=${req.user.token}`);
  }
};
