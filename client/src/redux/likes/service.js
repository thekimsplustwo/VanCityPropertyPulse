import axios from 'axios';
import { BASE_URL } from '../../config';

const getLikes = async () => {
  const response = await fetch(`${BASE_URL}/likes`, {
    credentials: 'include',
    method: 'GET',
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const deleteAllLikes = async () => {
  const response = await fetch(`${BASE_URL}/likes`, {
    credentials: 'include',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // console.log('deleteAllLikes is clicked, processing in service.js ');
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const addLikes = async property => {
  const response = await fetch(`${BASE_URL}/likes`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
    credentials: 'include',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
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
