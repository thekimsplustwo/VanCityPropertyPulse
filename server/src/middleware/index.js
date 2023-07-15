import passport from 'passport';
import google from './googleStrategy.js';
import User from '../schemas/users.js';

function passportIndex() {
  console.log('called');
  passport.serializeUser((user, done) => {
    console.log('user.email seri ', user.email);
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    console.log('user.email ', email);
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
