export const errorGenerator = obj => {
  const error = new Error(obj.message);
  error.statusCode = obj.statusCode;
  throw error;
};

const generateError = (message, statusCode) => ({
  message,
  statusCode,
});

export const ERROR_TYPE = {
  DB_NETWORK_ERROR: generateError('DATABASE_NETWORK_ERROR', 500),
  INVALID_EMAIL: generateError('INVALID_EMAIL', 400),
  INVALID_REQUEST: generateError('INVALID_REQUEST', 400),
  NETWORK_ERROR: generateError('NETWORK_ERROR', 500),
  PROPERTY_NOT_FOUND: generateError('PROPERTY_NOT_FOUND', 404),
  REQUEST_BODY_NOT_FOUND: generateError('REQUEST_BODY_NOT_FOUND', 404),
  UNAUTHORIZED: generateError('UNAUTHORIZED', 401),
  USER_NOT_EXIST: generateError('USER_NOT_EXIST', 404),
  ZILLOW_API_NETWORK_ERROR: generateError('ZILLOW_API_NETWORK_ERROR', 500),
  DATA_SCRAPPING_ERROR: generateError('DATA_SCRAPPING_ERROR', 500),
};
