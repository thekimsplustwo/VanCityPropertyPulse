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
    method: 'GET',
    // headers: {
    //   Authorization: `Bearer ${email}`,
    // },
  });
  // console.log(response);
  return response.json();
  // return response;
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

// const userGoogleLogin = userData => {
//   return {
//     type: actionTypes.GOOGLE_LOGIN,
//     payload: userData,
//   };
// };

export const googleLogin = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/google`);
    // const response = await fetch(`${BASE_URL}/users/google`, {
    //   credentials: 'include',
    // });
    // return response.data.user;
    return response;
  } catch (error) {
    console.error('Google login failed:', error);
  }
  return null;
};

const logout = async () => {
  await axios
    .post(`${BASE_URL}/users/logout`, {
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
    })
    .then(() => {
      window.location.href = 'http://localhost:3000/login';
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

export default {
  signup,
  login,
  logout,
  getUser,
  editProfile,
  googleLogin,
};
