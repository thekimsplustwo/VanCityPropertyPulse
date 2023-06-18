import * as data from '../data/data.js';

const { users } = data;
const getUserInfoByEmail = email => {
  return users.find(user => user.email === email);
};

const readUserByEmail = email => {
  return users.find(user => user.email === email);
};

export { getUserInfoByEmail };
