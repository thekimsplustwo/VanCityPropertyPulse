import * as data from '../data/data.js';

const { users } = data;
const getUserInfoByEmail = email => {
  return users.find(user => user.email === email);
};

const readUserByEmail = email => {
  return users.find(user => user.email === email);
};

const updateItem = (email, updateInfo) => {
  const userIndex = users.findIndex(user => user.email === email);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updateInfo };
    return users[userIndex];
  }
  return null;
};

export { getUserInfoByEmail, updateItem };
