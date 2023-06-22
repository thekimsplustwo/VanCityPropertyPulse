export const errorGenerator = obj => {
  const error = new Error(obj.message);
  error.statusCode = obj.statusCode;
  throw error;
};

export const ERROR_TYPE = {
  INVALID_EMAIL: 'INVALID_EMAIL',
  USER_NOT_EXIST: 'USER_NOT_EXIST',
};
