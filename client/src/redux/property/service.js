import axios from 'axios';
import { BASE_URL, FRONT_LOGIN_URL } from '../../config';
import googleLogout from '../users/service';

const getProperty = async (zpid, token) => {
  const response = await fetch(`${BASE_URL}/properties/${zpid}`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = response.json();
  if (response.status === 401) {
    await googleLogout();
    window.location.replace(FRONT_LOGIN_URL);
    return null;
  }
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const getWalkAndTransitScore = async (zpid, token) => {
  const response = await fetch(`${BASE_URL}/properties/${zpid}/walkscore`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = response.json();
  if (response.status === 401) {
    await googleLogout();
    window.location.replace(FRONT_LOGIN_URL);
    return null;
  }
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const getCompare = async (queryString, token) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/compare${queryString.toString()}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    return Array.isArray(response.data) ? response.data : [response.data];
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
  getProperty,
  getCompare,
  getWalkAndTransitScore,
};
