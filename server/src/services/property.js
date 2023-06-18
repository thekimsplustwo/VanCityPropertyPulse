import dotenv from 'dotenv';
import * as model from '../models/index.js';

dotenv.config();

const { MOCK } = process.env;

const propertyModel = MOCK ? model.mockPropertyModel : model.propertyModel;

const getPropertyDetails = async zpid => {
  return propertyModel.getPropertyDetails(zpid);
};

export { getPropertyDetails };
