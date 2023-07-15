import axios from 'axios';
import { BASE_URL } from '../../config';

const getProperty = async zpid => {
  const response = await fetch(`${BASE_URL}/properties/${zpid}`, {
    method: 'GET',
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

export default {
  getProperty,
};
