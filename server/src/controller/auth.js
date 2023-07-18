import dotenv from 'dotenv';
import { addSeconds } from 'date-fns';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const { GOOGLE_CLIENT_ID, SERVER_REDIRECT_URI } = process.env;

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

export { googleLogout };
