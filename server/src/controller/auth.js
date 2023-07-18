import dotenv from 'dotenv';
import { addSeconds } from 'date-fns';
import * as userService from '../services/user.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';
// import { users } from '../data/data.js';

dotenv.config();
// const { FRONT_REDIRECT_URL } = process.env;
const {
  FRONT_REDIRECT_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  SERVER_REDIRECT_URI,
} = process.env;

const googleRequestURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${SERVER_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile`;
const google = async (req, res) => {
  const token = req;
};

const googleLogout = async (req, res) => {
  const expirationDate = addSeconds(new Date(), 1);
  req.logout(function (err) {
    if (err) {
      errorGenerator(ERROR_TYPE.NETWORK_ERROR);
    }
    req.session.passport = null;
    res.clearCookie('connect.sid', { path: '/auth/login/google' });
    res.cookie('connect.sid', '', {
      expires: expirationDate,
      httpOnly: true,
      secure: true,
    });
    res.redirect('/auth/login/google');
  });
};

export { google, googleLogout };
