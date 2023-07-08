import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../schemas/users.js';

function google() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const userLoggingIn = await User.findOne({
            email: profile.emails[0].value,
            source: 'google',
          });
          if (userLoggingIn) {
            done(null, userLoggingIn);
          } else {
            const newUser = await User.create({
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              photo: profile.photos[0].value,
              source: 'google',
              accessToken,
              refreshToken,
            });

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
