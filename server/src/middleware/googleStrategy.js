import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import User from '../schemas/users.js';

dotenv.config();

function google() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:10010/users/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('token : ', accessToken);
        console.log('refreshToken : ', refreshToken);
        console.log('profile : ', profile);
        try {
          const userLoggingIn = await User.findOne({
            email: profile.emails[0].value,
            source: 'google',
          });
          console.log('before');
          if (userLoggingIn) {
            console.log('userLoggingIn ', userLoggingIn);
            done(null, userLoggingIn);
          } else {
            const newUser = await User.create({
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              photo: profile.photos[0].value,
              source: 'google',
            });
            console.log('newUser ', newUser);
            done(null, newUser);
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
