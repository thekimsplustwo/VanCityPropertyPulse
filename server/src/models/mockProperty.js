import * as data from '../data/data.js';

const { propertyDetails } = data;
export const getPropertyDetails = async zpid => {
  return propertyDetails.find(property => property.zpid === Number(zpid));
};
