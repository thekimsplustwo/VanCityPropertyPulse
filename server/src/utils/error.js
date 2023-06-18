export const errorGenerator = obj => {
  const error = new Error(obj.message);
  error.statusCode = obj.statusCode;
  throw error;
};

export const errorType = {
  INVALID_EMAIL: 'INVALID_EMAIL',
  USER_NOT_EXIST: 'USER_NOT_EXIST',
};
