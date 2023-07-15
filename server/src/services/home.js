import dotenv from 'dotenv';
import axios from 'axios';
import * as model from '../models/index.js';

dotenv.config();

const { MOCK } = process.env;

//const homeModel = MOCK === true ? model.mockHomeModel : model.homeModel;
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
  const trimedFilter = {
    ...filter,
    location: filter.location || 'vancouver, bc',
    listingStatus: 'FOR_SALE',
  };
  const options = ExtenedSearchOptions(trimedFilter);
  return homeModel.getList(trimedFilter, sort);
};

const getTotalPages = async () => {
  const totalProperties = await homeModel.getTotalProperties();
  return Math.ceil(totalProperties / 9);
};

const getPaginatedProperties = async (page, filter, sort) => {
  const propertiesPerPage = 9;
  const startIndex = (page - 1) * propertiesPerPage;
  const endIndex = page * propertiesPerPage;
  const filteredProperties = await homeModel.getList(filter, sort);
  return filteredProperties.slice(startIndex, endIndex);
};

export { getList, getTotalPages, getPaginatedProperties };
