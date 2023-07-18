import { BASE_URL, LOGIN_URI } from '../../config';

const getList = async params => {
  const queryParams = new URLSearchParams();

  // if (!params.location) {
  //   throw new Error('Location is required');
  // }

  Object.keys(params).forEach(key => {
    if (params[key] !== '') {
      queryParams.set(key, params[key]);
    }
  });

  const response = await fetch(`${BASE_URL}/home?${queryParams.toString()}`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (response.status === 401) {
    window.location.replace(LOGIN_URI);
  }
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

export default {
  getList,
};
