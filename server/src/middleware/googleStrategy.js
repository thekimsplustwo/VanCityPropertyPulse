import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import OAuth2Strategy from 'passport-oauth2';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../schemas/users.js';

const salt = bcrypt.genSaltSync();

dotenv.config();

const generateToken = async email => {
  try {
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    return token;
  } catch (error) {
    error.statusCode = 400;
    error.message = 'CREATE_TOKEN_FAILED';
    throw error;
  }
};
const googleRequestURL =
  `https://accounts.google.com/o/oauth2/v2/auth?client_id=` +
  `${process.env.GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=` +
  `${process.env.SERVER_REDIRECT_URL}` +
  '&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&' +
  'authuser=0&prompt=consent&accessType=offline';

function google() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:10010/users/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const userLoggingIn = await User.findOne({
            email: profile.emails[0].value,
            source: 'google',
          });
          if (userLoggingIn) {
            const token = await generateToken(userLoggingIn.email);
            done(null, { ...userLoggingIn, token });
          } else {
            const token = await generateToken(profile.emails[0].value);
            const newUser = await User.create({
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              photo: profile.photos[0].value,
              source: 'google',
              token: token,
            });
            done(null, { ...newUser, token });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
}

export default google;
