import * as data from '../data/data.js';

const { users } = data;

const getUserInfo = async emailAddress => {
  //
};

const login = async emailAddress => {
  //
};

const findByEmail = async email => {
  // for (let i = 0; i < users.length; i += 1) {
  //   if (users[i].email === email) {
  //     return users[i];
  //   }
  // }
  // return null;
  return users.find(user => user.email === email);
};

export { getUserInfo, login, findByEmail };
