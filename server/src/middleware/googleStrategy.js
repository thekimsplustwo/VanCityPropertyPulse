import passport from 'passport';
import jwt from 'jsonwebtoken';
import GoogleStrategy from 'passport-google-oauth2';
import dotenv from 'dotenv';
import User from '../schemas/users.js';
import { userService } from '../services/index.js';
import { userModel } from '../models/index.js';
import { users } from '../data/data.js';

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

function google() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.SERVER_REDIRECT_URL,
        passReqToCallback: true,
      },
      async (request, accessToken, refreshToken, profile, done) => {
        try {
          console.log('google strategy ==== ');
          const user = await userModel.getUserInfoByEmail(
            profile.emails[0].value,
            'google'
          );
          console.log('found user == ', user);
          if (user) {
            const token = await generateToken(user.email);
            done(null, { ...user, token });
          } else {
            const token = await generateToken(profile.emails[0].value);
            const userInfo = {
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              photo: profile.photos[0].value,
              source: 'google',
            };
            const newUser = await userModel.signup(userInfo);
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
