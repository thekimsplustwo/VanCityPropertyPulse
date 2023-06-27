export const saveAccessToken = accessToken => {
  localStorage.setItem('accessToken', accessToken);
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
};

export const saveLoggedEmail = loggedEmail => {
  localStorage.setItem('loggedEmail', loggedEmail);
};

export const getLoggedEmail = () => {
  return localStorage.getItem('loggedEmail');
};

export const removeLoggedEmail = () => {
  localStorage.removeItem('loggedEmail');
};
