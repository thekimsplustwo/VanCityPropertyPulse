/* eslint-disable import/namespace */
import Property from './properties.js';
import PropertyDetail from './propertyDetails.js';
import Like from './likes.js';
import User from './users.js';
import RawProperty from './rawProperties.js';
import Neighborhood from './neighborhood.js';
import * as mock from '../data/data.js';
import RawPropertyDetail from './rawPropertyDetail.js';

const collections = {
  properties: Property,
  propertyDetails: PropertyDetail,
  users: User,
  likes: Like,
  rawPropertyDetails: RawPropertyDetail,
  rawProperties: RawProperty,
  neighborhoods: Neighborhood,
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

const dropDataset = async collectionsToReset => {
  const dropPromises = collectionsToReset
    .map(collectionName => {
      const myModel = collections[collectionName];
      return myModel ? myModel.collection.drop() : undefined;
    })
    .filter(promise => promise !== undefined);

  await Promise.all(dropPromises);
};

const insertDataset = async collectionsToReset => {
  const insertPromises = collectionsToReset
    .map(collectionName => {
      const collection = collections[collectionName];
      const data = mock[collectionName];

      return collection && data ? collection.insertMany(data) : undefined;
    })
    .filter(promise => promise !== undefined);

  await Promise.all(insertPromises);
};
const resetDatabase = async (...collectionsToReset) => {
  let collectionsToResetUpdated = collectionsToReset;
  if (collectionsToReset.includes('all')) {
    collectionsToResetUpdated = Object.keys(collections);
  }
  try {
    await deleteDataset(collectionsToResetUpdated);
    await dropDataset(collectionsToResetUpdated);
    await insertDataset(collectionsToResetUpdated);
  } catch (err) {
    console.error(err);
  }
};
export default resetDatabase;
