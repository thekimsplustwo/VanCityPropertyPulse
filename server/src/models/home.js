import RawProperty from '../schemas/rawProperties.js';

const generateQuery = filter => {
  const query = {};

  if (filter.minPrice) {
    filter.minPrice = parseInt(filter.minPrice, 10);
    query.price = { ...query.price, $gte: filter.minPrice };
  }

  if (filter.maxPrice) {
    filter.maxPrice = parseInt(filter.maxPrice, 10);
    query.price = { ...query.price, $lte: filter.maxPrice };
  }

  if (filter.home_type && Array.isArray(filter.home_type)) {
    query.propertyType = {
      $in: filter.home_type.map(type => new RegExp(`^${type}$`, 'i')),
    };
  } else if (filter.home_type) {
    query.propertyType = new RegExp(`^${filter.home_type}$`, 'i');
  }

  if (filter.location) {
    query.address = { $regex: new RegExp(filter.location, 'i') };
  }

  //query.propertyType = filter.status_type || 'FOR_SALE';

  return query;
};
const getList = async (filter, sort) => {
  const query = generateQuery(filter);
  const defaultSort = { createdAt: 'asc' };
  const res = await RawProperty.find(query)
    .sort(sort || defaultSort)
    .exec();
  return res;
};

export { getList };
