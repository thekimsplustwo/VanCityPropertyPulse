import axios from 'axios';
import { BASE_URL } from '../../config';

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

const getUser = async email => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${email}`,
    },
  });
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
  getUser,
  editProfile,
};
