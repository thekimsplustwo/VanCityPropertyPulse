import RawProperty from '../schemas/rawProperties.js';
import Neighborhood from '../schemas/neighborhood.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const findZipcodeByNeighborhoodTitle = async title => {
  const neighborhood = await Neighborhood.findOne({ title: title });
  if (!neighborhood) {
    errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  }
  return neighborhood.zipcode.trim();
};

const generateQuery = async filter => {
  const query = {};

  if (filter.minPrice) {
    filter.minPrice = parseInt(filter.minPrice, 10);
    query.price = { ...query.price, $gte: filter.minPrice };
  }

  if (filter.maxPrice) {
    filter.maxPrice = parseInt(filter.maxPrice, 10);
    query.price = { ...query.price, $lte: filter.maxPrice };
  }

  if (filter.bedsMin) {
    filter.bedsMin = parseInt(filter.bedsMin, 10);
    query.bedrooms = { ...query.bedrooms, $gte: filter.bedsMin };
  }

  if (filter.bedsMax) {
    filter.bedsMin = parseInt(filter.bedsMax, 10);
    query.bedrooms = { ...query.bedrooms, $lte: filter.bedsMax };
  }

  if (filter.home_type) {
    const homeTypes = Array.isArray(filter.home_type)
      ? filter.home_type
      : filter.home_type.split(',');
    query.propertyType = {
      $in: homeTypes.map(type => new RegExp(`^${type}$`, 'i')),
    };
  }
  if (filter.location) {
    const zipcode = await findZipcodeByNeighborhoodTitle(filter.location);
    query.address = { $regex: new RegExp(zipcode, 'i') };
  }
  return query;
};

const getList = async (filter, sort) => {
  const query = await generateQuery(filter);
  const defaultSort = { createdAt: 'asc' };
  const res = await RawProperty.find(query)
    .sort(sort || defaultSort)
    .exec();
  return res;
};

export { findZipcodeByNeighborhoodTitle, getList };
