import axios from 'axios';
import { BASE_URL } from '../../config';

const getUser = async () => {
  const response = await fetch(`${BASE_URL}/users/profile`, {
    credentials: 'include',
    method: 'GET',
  });
  const res = response.json();
  return res;
};

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

const googleLogout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/logout/google`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const editProfile = async formData => {
  const url = `${BASE_URL}/users`;
  try {
    const response = await axios.patch(url, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
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
