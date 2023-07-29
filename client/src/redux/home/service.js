import axios from 'axios';
import { BASE_URL, FRONT_LOGIN_URL } from '../../config';
import googleLogout from '../users/service';

const getList = async (params, token) => {
  const queryParams = new URLSearchParams();

  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key] !== '') {
        queryParams.set(key, params[key]);
      }
    });
  }
  try {
    const response = await axios.get(
      `${BASE_URL}/home?${queryParams.toString()}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      await googleLogout();
      window.location.replace(FRONT_LOGIN_URL);
      return null;
    }
    const errorMsg = error.response?.data?.message;
    throw new Error(errorMsg);
  }
};

export default {
  getList,
};
