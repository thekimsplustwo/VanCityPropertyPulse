import * as data from '../data/data.js';

const { users } = data;

const getUserInfo = async emailAddress => {
  //
};

const login = async emailAddress => {
  //
};

const findByEmail = async email => {
  return users.find(user => user.email === email);
};

export { getUserInfo, login, findByEmail };
