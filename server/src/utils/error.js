export const errorGenerator = obj => {
  const error = new Error(obj.message);
  error.statusCode = obj.statusCode;
  throw error;
};

export const ERROR_TYPE = {
  INVALID_EMAIL: { message: 'INVALID_EMAIL', statusCode: 400 },
  INVALID_REQUEST: { message: 'INVALID_REQUEST', statusCode: 400 },
  USER_NOT_EXIST: { message: 'USER_NOT_EXIST', statusCode: 404 },
  PROPERTY_NOT_FOUND: { message: 'PROPERTY_NOT_FOUND', statusCode: 404 },
  REQUEST_BODY_NOT_FOUND: {
    message: 'REQUEST_BODY_NOT_FOUND',
    statusCode: 404,
  },
  DB_NETWORK_ERROR: { message: 'DATABASE_NETWORK_ERROR', statusCode: 500 },
  ZILLOW_API_NETWORK_ERROR: {
    message: 'ZILLOW_API_NETWORK_ERROR',
    statusCode: 500,
  },
  NETWORK_ERROR: { message: 'NETWORK_ERROR', statusCode: 500 },
  UNAUTHORIZED: { message: 'UNAUTHORIZED', statusCode: 401 },
};
