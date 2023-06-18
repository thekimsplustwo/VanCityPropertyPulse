import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 10010;

const allowedOrigins = [`http://localhost:${PORT}`];

const corsOption = {
  origin: '*',
};

const app = express();
app.use(cors(corsOption));
app.use(express.json());
app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();
