import axios from 'axios';
import { resolvePath } from 'react-router-dom';
import { BASE_URL } from '../../config';
import { actionTypes } from './actionTypes';
// import { getAccessToken, removeAccessToken } from '../../utils/storage';

const signup = async email => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${email}`,
    },
    body: JSON.stringify(email),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const getUser = async () => {
  const response = await fetch(`${BASE_URL}/users/profile`, {
    credentials: 'include',
    method: 'GET',
  });
  console.log('getUser response: ', response);
  return response.json();
};

const login = async email => {
  const response = await axios.post(
    `${BASE_URL}/users`,
    {
      email,
    },
    {
      headers: {
        Authorization: `Bearer ${email}`,
      },
    }
  );
  return response.json();
};

export const googleLogin = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/google`, {
      credentials: 'include',
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.error('Google login failed:', error);
  }
  return null;
};

const logout = async () => {
  await axios
    .post(`${BASE_URL}/users/logout`, {
      credentials: 'include',
      method: 'POST',
    })
    .then(response => {
      console.log(response.data.message);
      window.location.href = 'http://localhost:3000/home';
    })
    .catch(error => {
      console.error('Logout failed:', error);
    });
};

const editProfile = async formData => {
  const url = `${BASE_URL}/users`;
  const { email } = formData;

  try {
    const response = await axios.patch(url, formData, {
      headers: {
        Authorization: `Bearer ${email}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const revokeToken = async accessToken => {
  try {
    const response = await axios.post(
      'https://accounts.google.com/o/oauth2/revoke',
      null,
      {
        params: {
          token: accessToken,
        },
      }
    );
    // Handle the response as needed
    console.log(response.data);
  } catch (error) {
    console.error('Token revocation failed:', error);
    // Handle the error scenario
  }
};

export default {
  signup,
  login,
  logout,
  getUser,
  editProfile,
  googleLogin,
  revokeToken,
};
