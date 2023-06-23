import axios from 'axios';
import { BASE_URL } from '../../config';

const getLikes = async () => {
  const response = await fetch(`${BASE_URL}/likes`, {
    method: 'GET',
    headers: {
      // 'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
      Authorization: 'Bearer johndoe@gmail.com',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const deleteAllLikes = async () => {
  const response = await fetch(`${BASE_URL}/likes/all`, {
    method: 'DELETE',
    headers: {
      // 'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
      Authorization: 'Bearer johndoe@gmail.com',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const addLikes = async property => {
  const response = await fetch(`${BASE_URL}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
      Authorization: 'Bearer johndoe@gmail.com',
    },
    body: JSON.stringify(property),
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const deleteLikes = async zpid => {
  const response = await fetch(`${BASE_URL}/likes/${zpid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
      Authorization: 'Bearer johndoe@gmail.com',
    },
  });

  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(errorMsg);
  }
};

export default {
  getLikes,
  addLikes,
  deleteLikes,
  deleteAllLikes,
};
