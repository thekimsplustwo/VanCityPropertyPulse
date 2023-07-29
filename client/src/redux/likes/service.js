import axios from 'axios';
import { BASE_URL, FRONT_LOGIN_URL } from '../../config';
import googleLogout from '../users/service';

const getLikes = async token => {
  try {
    const response = await axios.get(`${BASE_URL}/likes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      await googleLogout();
      window.location.replace(FRONT_LOGIN_URL);
      return null;
    }
    const errorMsg = error.response?.data?.message;
    throw new Error(errorMsg || 'NETWORK_ERROR');
  }
};

const addLikes = async (property, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/likes`, property, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      maxBodyLength: Infinity,
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      await googleLogout();
      window.location.replace(FRONT_LOGIN_URL);
      return null;
    }
    const errorMsg = error.response?.data?.message;
    throw new Error(errorMsg || 'NETWORK_ERROR');
  }
};

const deleteLikes = async (zpid, token) => {
  try {
    const response = await axios.delete(`${BASE_URL}/likes/${zpid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      await googleLogout();
      window.location.replace(FRONT_LOGIN_URL);
      return null;
    }
    const errorMsg = error.response?.data?.message;
    throw new Error(errorMsg || 'NETWORK_ERROR');
  }
};

const deleteAllLikes = async token => {
  try {
    const response = await axios.delete(`${BASE_URL}/likes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      await googleLogout();
      window.location.replace(FRONT_LOGIN_URL);
      return null;
    }
    const errorMsg = error.response?.data?.message;
    throw new Error(errorMsg || 'NETWORK_ERROR');
  }
};

export default {
  getLikes,
  addLikes,
  deleteLikes,
  deleteAllLikes,
};
