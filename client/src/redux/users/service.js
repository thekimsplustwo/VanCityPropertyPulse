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

const googleLogout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/logout/google`, null, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUser = async () => {
  const response = await fetch(`${BASE_URL}/users/profile`, {
    credentials: 'include',
    method: 'GET',
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
