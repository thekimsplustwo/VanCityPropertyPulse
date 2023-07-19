import passport from 'passport';
import jwt from 'jsonwebtoken';
import google from './googleStrategy.js';
import User from '../schemas/users.js';

function passportConfig() {
  passport.serializeUser((user, done) => {
    console.log('serial user === ', user);
    done(null, user.token);
  });

  passport.deserializeUser((token, done) => {
    console.log('deserial ', token);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const { email } = decodedToken;
    User.findOne({ email })
      .then(user => {
        console.log('found deserial ==== ', user);
        done(null, token);
      })
      .catch(err => {
        done(err);
      });
  });

  google();
}

export default passportConfig;
