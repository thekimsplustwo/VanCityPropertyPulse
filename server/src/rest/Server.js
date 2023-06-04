require('dotenv').config();

const http = require('http');
const cors = require('cors');
const express = require('express');

const corsOption = {
  origin: '*',
};
const app = express();
app.use(cors(corsOption));
app.use(express.json());
//app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);
const PORT = process.env.PORT || 10010;

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();
