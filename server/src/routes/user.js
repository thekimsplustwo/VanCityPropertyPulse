import dotenv from 'dotenv';
import { Router } from 'express';
import passport from 'passport';
import cors from 'cors';
import asyncWrap from '../async-wrap.js';
import * as userController from '../controller/user.js';
import { verifyToken } from '../middleware/auth.js';

dotenv.config();

const { FRONT_REDIRECT_URL } = process.env;

const userRouter = Router();

userRouter.use(cors());

// userRouter.put('/', asyncWrap(userController.updateUserInfo));
// userRouter.get('/', asyncWrap(userController.login));
// userRouter.get('/:email', asyncWrap(userController.getUser));
// userRouter.post('/', asyncWrap(userController.signup));

userRouter.get('/', verifyToken, asyncWrap(userController.getUser));
userRouter.patch('/', verifyToken, asyncWrap(userController.updateUserInfo));
// userRouter.get('/', verifyToken, asyncWrap(userController.login));
userRouter.post('/', asyncWrap(userController.signup));

userRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

userRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/google' }),
  (req, res) => {
    res.redirect(FRONT_REDIRECT_URL);
  }
);

userRouter.post('/logout', function (req, res, next) {
  req.logout(next);
  console.log(req.session);

  req.session.destroy(err => {
    console.log('got here 1');
    if (err) {
      console.error('Error destroying session: ', err);
      return next(err);
    }
    console.log('got here 2');
    res.redirect('/profile');
  });
});

userRouter.get('/profile', (req, res) => {
  //   if (req.user) {
  const { email } = req.user;
  //     res.status(200).json({ loggedIn: true, email });
  //   } else {
  //     res.status(401).json({ loggedIn: false, message: 'User not logged in' });
  //   }
  res.status(200).json({ loggedIn: true, email });
});

export default userRouter;
