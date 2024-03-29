import axios from 'axios';
import { BASE_URL, FRONT_LOGIN_URL } from '../../config';

const googleLogin = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/login/google`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const googleLogout = async token => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/logout/google`, null, {
      withCredentials: true,
    });
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    localStorage.clear();
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUser = async token => {
  try {
    const response = await axios.get(`${BASE_URL}/users/profile`, {
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

const editProfile = async (formData, token) => {
  const url = `${BASE_URL}/users`;
  try {
    const response = await axios.patch(url, formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
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
  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
  googleLogout,
  getUser,
  editProfile,
  googleLogin,
};
