import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = async (email, expire) => {
  try {
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: expire || '1h',
    });
    return token;
  } catch (error) {
    error.statusCode = 400;
    error.message = 'CREATE_TOKEN_FAILED';
    throw error;
  }
};

export default generateToken;
