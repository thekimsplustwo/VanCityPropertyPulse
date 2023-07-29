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

export default {
  getProperty,
};
