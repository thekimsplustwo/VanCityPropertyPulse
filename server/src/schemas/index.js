import mongoose from 'mongoose';
import dotenv from 'dotenv';
import resetDatabase from './resetDatabase.js';

dotenv.config();

const { MONGODB_HOST, MONGODB_USER, MONGODB_PW, DATABASE } = process.env;
const mongoDBURL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PW}@${MONGODB_HOST}/${DATABASE}?retryWrites=true&w=majority`;
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 5,
};

const connect = async () => {
  if (!MONGODB_USER || !MONGODB_PW || !MONGODB_HOST || !DATABASE) {
    console.error('MongoDB Connection Credential Missing');
  } else {
    try {
      mongoose.set('debug', true);
      const conn = await mongoose.connect(mongoDBURL, mongooseOptions);
      console.log(`connected@${conn.connection.host}`);
      return conn;
    } catch (err) {
      console.error(`connection error: ${err.message}`);
      throw err;
    }
  }
};

mongoose.connection.on('error', err => {
  console.error(`connection error: ${err.message}`);
});
mongoose.connection.on('disconnected', () => {
  console.error('disconnected. re-connect');
  connect();
});
//resetDatabase('likes');
export { mongoDBURL, connect };
