import jwt from 'jsonwebtoken';
import passport from 'passport';
import { addSeconds } from 'date-fns';
import { findByEmail } from '../models/user.js';
import { users } from '../data/data.js';

const { FRONT_REDIRECT_URL, FRONT_URL, SERVER_REDIRECT_URL } = process.env;

const googleCallbackOptions = {
  successRedirect: `${FRONT_REDIRECT_URL}`,
  failureRedirect: '/auth/login/google',
};

const expirationDate = addSeconds(new Date(), 1);

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect(FRONT_URL);
  }
};

export const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/home');
  }
};

export const verifyToken = async (req, res, next) => {
  if (process.env.AUTH !== 'on') {
    req.user = users.find(user => user.email === 'johndoe@gmail.com');
    next();
  } else {
    try {
      if (!(req.session.passport && req.isAuthenticated())) {
        console.log('redirect ! ');
        return res.status(401).redirect(FRONT_URL);
      }
      const email = req.session.passport.user;
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
      return res.status(200).redirect(`${FRONT_REDIRECT_URL}`);
    });
  })(req, res, next);
};

export const handleLogout2 = (req, res, next) => {
  console.log('logout called ==============');

  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    // res.clearCookie('connect.sid');
    // res.cookie('accessToken', '', {
    //   expires: expirationDate,
    //   httpOnly: true,
    //   secure: true,
    // });
    // res.cookie('connect.sid', '', {
    //   expires: expirationDate,
    //   httpOnly: true,
    //   secure: true,
    // });
    res.redirect(`${FRONT_REDIRECT_URL}`);
  });
};
export const handleLogout = (req, res, next) => {
  console.log('logout called ==============');

  new Promise((resolve, reject) => {
    req.session.destroy(err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  })
    .then(() => {
      return new Promise((resolve, reject) => {
        req.logout(err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    })
    .then(() => {
      delete req.session.passport; // delete passport session
      res.clearCookie('accessToken');
      res.clearCookie('connect.sid');
      res.cookie('accessToken', '', {
        expires: expirationDate,
        httpOnly: true,
        secure: true,
      });
      res.cookie('connect.sid', '', {
        expires: expirationDate,
        httpOnly: true,
        secure: true,
      });
      res.redirect('/auth/login/google');
    })
    .catch(err => {
      next(err);
    });
};
