import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_HOST, MONGODB_USER, MONGODB_PW, DATABASE } = process.env;

const connect = () => {
  if (!MONGODB_USER || !MONGODB_PW || !MONGODB_HOST || !DATABASE) {
    console.error('MongoDB Connection Credential Missing');
  } else {
    mongoose.set('debug', true);
    mongoose
      .connect(
        `mongodb+srv://${MONGODB_USER}:${MONGODB_PW}@${MONGODB_HOST}/${DATABASE}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(conn => {
        console.log(`connected@${conn.connection.host}`);
      })
      .catch(err => {
        console.error(`connection error: ${err.message}`);
      });
  }
};

mongoose.connection.on('error', err => {
  console.error(`connection error: ${err.message}`);
});
mongoose.connection.on('disconnected', () => {
  console.error('disconnected. re-connect');
  connect();
});

export default connect;
