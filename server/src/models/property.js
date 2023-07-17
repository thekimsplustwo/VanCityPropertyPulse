import PropertyDetail from '../schemas/propertyDetails.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const getPropertyDetails = async zpid => {
  const property = await PropertyDetail.findOne({ zpid: zpid });
  if (!property) {
    errorGenerator(ERROR_TYPE.PROPERTY_NOT_FOUND);
  }
  return property;
};
export { getPropertyDetails };
