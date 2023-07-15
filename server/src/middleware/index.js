import passport from 'passport';
import jwt from 'jsonwebtoken';
import google from './googleStrategy.js';
import User from '../schemas/users.js';

function passportIndex() {
  console.log('called');
  passport.serializeUser((user, done) => {
    console.log('user ', user);
    console.log('user.token ', user.token);
    done(null, user.token);
  });

  passport.deserializeUser((token, done) => {
    console.log('user.token ', token);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log('decodedToken ', decodedToken);
    const { email } = decodedToken;
    User.findOne({ email })
      .then(user => {
        console.log('found email ', user);
        done(null, user);
      })
      .catch(err => {
        console.log('err ', err);
        done(err);
      });
  });

  google();
}

export default passportIndex;
