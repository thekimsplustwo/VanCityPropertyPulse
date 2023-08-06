import RawPropertyDetail from '../schemas/rawPropertyDetail.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const getPropertyDetails = async zpid => {
  const property = await RawPropertyDetail.findOne({ zpid: zpid });
  if (!property) {
    errorGenerator(ERROR_TYPE.PROPERTY_NOT_FOUND);
  }
  return property;
};

const datascrappingProperty = async data => {
  const { zpid } = data;
  try {
    await RawPropertyDetail.findOneAndUpdate({ zpid: zpid }, data, {
      new: true,
      upsert: true,
    });
  } catch (error) {
    errorGenerator(ERROR_TYPE.DATA_SCRAPPING_ERROR);
  }
};
export { getPropertyDetails, datascrappingProperty };
