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
    console.log('generate token = ', token);
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
console.log('url ', googleRequestURL);

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
            const token = await generateToken(userLoggingIn.email);
            userLoggingIn['token'] = token;
            console.log('token ', token);

            console.log('userLoggingIn ', { token });
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

            console.log('token ', token);
            //newUser['token'] = token;
            console.log('newUser ', newUser);

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

/*
function oauth() {
  passport.use(
    new OAuth2Strategy(
      {
        authorizationURL: googleRequestURL,
        tokenURL: 'https://oauth2.googleapis.com/token',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:10010/users/google/callback',
      },
      async (accessToken, refreshToken, profile, cb) => {
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
            cb(null, userLoggingIn);
          } else {
            const newUser = await User.create({
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              photo: profile.photos[0].value,
              source: 'google',
            });
            console.log('newUser ', newUser);
            cb(null, newUser);
          }
        } catch (error) {
          console.error(error);
          cb(error);
        }
      }
    )
  );
}
*/
