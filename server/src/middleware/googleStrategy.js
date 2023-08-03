import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';
import dotenv from 'dotenv';
import { userModel } from '../models/index.js';
import generateToken from '../utils/token.js';

dotenv.config();

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const GOOGLE_OAUTH_OPTION = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/auth/google/callback',
  scope: ['email', 'profile'],
  passReqToCallback: true,
};

function google() {
  passport.use(
    new GoogleStrategy(
      GOOGLE_OAUTH_OPTION,
      async (request, accessToken, refreshToken, profile, done) => {
        try {
          const user = await userModel.getUserInfoByEmail(
            profile.emails[0].value,
            'google'
          );
          if (user) {
            const token = await generateToken(user.email);
            console.log('create new token ', token);
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
