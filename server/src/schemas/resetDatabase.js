import Property from './properties.js';
import PropertyDetail from './propertyDetails.js';
import Like from './likes.js';
import User from './users.js';
import RawProperty from './rawProperties.js';
import * as mock from '../data/data.js';

const deleteDataset = async () => {
  await Property.deleteMany();
  await PropertyDetail.deleteMany();
  await User.deleteMany();
  await Like.deleteMany();
  await RawProperty.deleteMany();
};

const insertDataset = async () => {
  await PropertyDetail.insertMany(mock.propertyDetails);
  await Property.insertMany(mock.properties);
  await User.insertMany(mock.users);
  await Like.insertMany(mock.likes);
  await RawProperty.insertMany(mock.rawProperties);
};

const resetDatabase = async () => {
  try {
    await deleteDataset();
    await insertDataset();
  } catch (err) {
    console.error(err);
  }
};

export default resetDatabase;
