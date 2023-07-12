/* eslint-disable import/namespace */
import Property from './properties.js';
import PropertyDetail from './propertyDetails.js';
import Like from './likes.js';
import User from './users.js';
import RawProperty from './rawProperties.js';
import * as mock from '../data/data.js';

const collections = {
  properties: Property,
  propertyDetails: PropertyDetail,
  users: User,
  likes: Like,
  rawProperties: RawProperty,
};

const deleteDataset = async collectionsToReset => {
  const deletePromises = collectionsToReset
    .map(collectionName => {
      const collection = collections[collectionName];
      return collection ? collection.deleteMany() : undefined;
    })
    .filter(promise => promise !== undefined);

  await Promise.all(deletePromises);
};

const insertDataset = async collectionsToReset => {
  const insertPromises = collectionsToReset
    .map(collectionName => {
      const collection = collections[collectionName];
      const data = mock[collectionName];
      console.log('data ', data);

      return collection && data ? collection.insertMany(data) : undefined;
    })
    .filter(promise => promise !== undefined);

  await Promise.all(insertPromises);
};
const resetDatabase = async (...collectionsToReset) => {
  if (collectionsToReset.includes('all')) {
    collectionsToReset = Object.keys(collections);
  }

  try {
    await deleteDataset(collectionsToReset);
    await insertDataset(collectionsToReset);
  } catch (err) {
    console.error(err);
  }
};
export default resetDatabase;
