import dotenv from 'dotenv';
import axios from 'axios';
import * as model from '../models/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const { MOCK } = process.env;

const ZILLOW_API_PROPERTY_DETAIL_FLAG_ON =
  process.env.ZILLOW_API_PROPERTY_DETAIL.toLowerCase() === 'on';

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

const getPropertyDetailFromZillowAPI = async zpid => {
  const options = propertyDetailsOptions(zpid);
  const response = await axios.request(options);
  if (response.status !== 200 || response.data.status === 'error') {
    errorGenerator(ERROR_TYPE.ZILLOW_API_NETWORK_ERROR);
  }
  return response.data || [];
};

const getPropertyDetailFromDatabase = async zpid => {
  const response = propertyModel.getPropertyDetails(zpid);
  return response || [];
};

const getPropertyDetails = async zpid => {
  return ZILLOW_API_PROPERTY_DETAIL_FLAG_ON
    ? getPropertyDetailFromZillowAPI(zpid)
    : getPropertyDetailFromDatabase(zpid);
};

export { getPropertyDetails };
