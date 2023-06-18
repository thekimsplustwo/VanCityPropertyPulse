import axios from 'axios';
import { BASE_URL } from '../../config';

const signup = async email => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
  const response = await fetch(`${BASE_URL}/users/${email}`, {
    method: 'GET',
  });
  return response.json();
};

const login = async email => {
  const response = await axios.post(`${BASE_URL}/users`, {
    email,
  });
  return response.json();
};

export default {
  signup,
  login,
  getUser,
};
