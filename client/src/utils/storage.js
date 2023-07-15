export const saveAccessToken = accessToken => {
  localStorage.setItem('accessToken', accessToken);
  console.log(`accessToken ${accessToken} has been saved.`);
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
  console.log(`accessToken has been removed.`);
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
