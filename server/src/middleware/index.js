import passport from 'passport';
import jwt from 'jsonwebtoken';
import google from './googleStrategy.js';
import User from '../schemas/users.js';

function passportIndex() {
  passport.serializeUser((user, done) => {
    done(null, user.token);
  });

  passport.deserializeUser((token, done) => {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const { email } = decodedToken;
    User.findOne({ email })
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err);
      });
  });

  google();
}

export default passportIndex;
