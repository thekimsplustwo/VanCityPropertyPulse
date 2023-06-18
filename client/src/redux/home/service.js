import axios from 'axios';
import { BASE_URL } from '../../config';

const getList = async () => {
  const response = await fetch(`${BASE_URL}/home`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  console.log('front list data : ', data);
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};
export default {
  getList,
};
