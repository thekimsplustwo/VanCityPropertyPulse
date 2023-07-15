import dotenv from 'dotenv';
import { Router } from 'express';
import passport from 'passport';
import { addSeconds } from 'date-fns';
import jwt from 'jsonwebtoken';
import asyncWrap from '../async-wrap.js';
import * as userController from '../controller/user.js';
import { verifyToken } from '../middleware/auth.js';
import User from '../schemas/users.js';

dotenv.config();

const { FRONT_REDIRECT_URL } = process.env;

const userRouter = Router();

userRouter.get('/', verifyToken, asyncWrap(userController.getUser));
userRouter.patch('/', verifyToken, asyncWrap(userController.updateUserInfo));
userRouter.post('/', asyncWrap(userController.signup));

//userRouter.get('/google', passport.authenticate('oauth2'));

userRouter.get(
  '/google',
  passport.authenticate('google', {
    authType: 'request',
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'openid',
    ],
    accessType: 'offline',
    prompt: 'consent',
  })
);

// google login success or fail
userRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/google' }),
  (req, res) => {
    //console.log('req ', req);
    res.redirect(`${FRONT_REDIRECT_URL}`);
  }
);

// userRouter.get(
//   '/google/callback',
//   passport.authenticate('google', {
//     successReturnToOrRedirect: `${FRONT_REDIRECT_URL}`,
//     failureRedirect: '/google',
//   })
// );

userRouter.post('/logout', (req, res, next) => {
  req.session.destroy();

  const expirationDate = addSeconds(new Date(), 1);

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
});
userRouter.get('/profile', async (req, res) => {
  console.log('profile called');
  if (req.session.passport) {
    console.log('req.session  :: ', req.session);
    console.log('req.session.passport  :: ', req.session.passport);
    const token = req.session.passport.user;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log('decodedToken ', decodedToken);
    const { email } = decodedToken;
    const user = await User.findOne({ email });
    res.status(200).json(user);
  } else {
    res.status(400).json();
  }
});

// userRouter.get('/profile', async (req, res) => {
//   if (req.session.passport) {
//     console.log('req.session  :: ', req.session);
//     console.log('req.session.passport  :: ', req.session.passport);
//     const email = req.session.passport.user;
//     const user = await User.findOne({ email });
//     res.status(200).json(user);
//   } else {
//     res.status(400).json();
//   }
// });

export default userRouter;
