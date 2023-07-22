import { BASE_URL, LOGIN_URI } from '../../config';
import googleLogout from '../users/service';

const getProperty = async zpid => {
  const response = await fetch(`${BASE_URL}/properties/${zpid}`, {
    credentials: 'include',
    method: 'GET',
  });
  const data = response.json();
  if (response.status === 401) {
    await googleLogout();
    window.location.replace(LOGIN_URI);
    return null;
  }
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const getWalkAndTransitScore = async zpid => {
  const response = await fetch(`${BASE_URL}/properties/${zpid}/walkscore`, {
    credentials: 'include',
    method: 'GET',
  });
  const data = response.json();
  if (response.status === 401) {
    await googleLogout();
    window.location.replace(LOGIN_URI);
    return null;
  }
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  console.log(response);
  return data;
};

export default {
  getProperty,
  getWalkAndTransitScore,
};
