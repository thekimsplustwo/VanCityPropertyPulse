import passport from 'passport';
import google from './googleStrategy.js';
import User from '../schemas/users.js';

function passportIndex() {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    console.log('deserializeUser: ', email);
    User.findOne({ email })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  google();
}

export default passportIndex;
