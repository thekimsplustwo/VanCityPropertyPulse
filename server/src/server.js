import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import connect from './schemas/index.js';
import routes from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 10010;

const app = express();

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH');
  next();
});

app.use(express.json());
app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);

const start = async () => {
  try {
    await connect();
    server.listen(PORT, () =>
      console.log(`Server is listening on ${PORT} | MOCK ${process.env.MOCK}`)
    );
  } catch (err) {
    console.error(err);
  }
};

start();
