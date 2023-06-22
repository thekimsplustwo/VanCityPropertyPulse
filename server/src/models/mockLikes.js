import * as data from '../data/data.js';

const { likes } = data;

const getLikes = async email => {
  const { properties } = likes.find(userLikes => userLikes.email === email);
  return properties || [];
};

const addLikes = async (email, property) => {
  const userLikes = likes.find(user => user.email === email);
  if (userLikes) {
    userLikes.properties.push(property);
  } else {
    likes.push({ email, properties: [property] });
  }
  return likes.find(user => user.email === email);
};

const removeLikes = (email, zpid) => {
  const userIndex = likes.findIndex(userLikes => userLikes.email === email);
  if (userIndex !== -1) {
    const propertyIndex = likes[userIndex].properties.findIndex(
      property => property.zpid === zpid
    );

    if (propertyIndex !== -1) {
      likes[userIndex].properties.splice(propertyIndex, 1);
    }
  }
  return likes.find(user => user.email === email);
};

export { getLikes, addLikes, removeLikes };
