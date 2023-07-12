import dotenv from 'dotenv';
import axios from 'axios';
import * as model from '../models/index.js';

dotenv.config();

const { MOCK } = process.env;

//const homeModel = MOCK ? model.mockHomeModel : model.homeModel;
const { homeModel } = model;

const ExtenedSearchOptions = (filter, sort) => {
  return {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
    params: filter,
    headers: {
      'X-RapidAPI-Key': process.env.ZILLOW_API_KEY,
      'X-RapidAPI-Host': process.env.ZILLOW_API_HOST,
    },
  };
};

const getList = async (filter, sort) => {
  console.log('filter : ', filter);
  const trimedFilter = {
    ...filter,
    location: filter.location || 'vancouver, bc',
    listingStatus: 'FOR_SALE',
  };
  const options = ExtenedSearchOptions(trimedFilter);
  console.error('option ', options);
  //const response = await axios.request(options);
  //console.log('response : ', response.data);
  return homeModel.getList(trimedFilter, sort);
};

export { getList };
