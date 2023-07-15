import dotenv from 'dotenv';
import * as userService from '../services/user.js';
// import { users } from '../data/data.js';

dotenv.config();
// const { FRONT_REDIRECT_URL } = process.env;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SERVER_REDIRECT_URI } =
  process.env;

const googleRequestURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${SERVER_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile`;
const google = async (req, res) => {
  const token = req;
  console.log('req ', req);
};

const callback = async (req, res) => {
  const token = req;
  console.log('req ', req);
};
export { google, callback };
