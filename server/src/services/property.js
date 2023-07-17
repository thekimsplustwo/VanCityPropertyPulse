import dotenv from 'dotenv';
import axios from 'axios';
import * as model from '../models/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const { MOCK } = process.env;

const propertyModel =
  MOCK === true ? model.mockPropertyModel : model.propertyModel;

const propertyDetailsOptions = zpid => {
  return {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/property',
    params: { zpid: zpid },
    headers: {
      'X-RapidAPI-Key': process.env.ZILLOW_API_KEY,
      'X-RapidAPI-Host': process.env.ZILLOW_API_HOST,
    },
  };
};

const getPropertyDetails = async zpid => {
  const options = propertyDetailsOptions(zpid);
  const response = await axios.request(options);
  if (response.status !== 200) {
    errorGenerator(ERROR_TYPE.ZILLOW_API_NETWORK_ERROR);
  }
  if (!response.data.zpid) {
    errorGenerator(ERROR_TYPE.PROPERTY_NOT_FOUND);
  }
  return response.data;
};

const getPropertySummary = async zpid => {
  return propertyModel.getPropertyDetails(zpid);
};

export { getPropertyDetails, getPropertySummary };
