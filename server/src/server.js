import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import passport from 'passport';
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';
import connect from './schemas/index.js';
import routes from './routes/index.js';
import passportIndex from './middleware/index.js';

dotenv.config();

const { MONGODB_HOST, MONGODB_USER, MONGODB_PW, DATABASE, SECRET_KEY } =
  process.env;

const PORT = process.env.PORT || 10010;

const MongoDBStore = connectMongoDBSession(session);

connect();

const app = express();
app.use(express.json());
app.use(logger('dev'));

app.use(
  session({
    secret: `${SECRET_KEY}`,
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({
      uri: `mongodb+srv://${MONGODB_USER}:${MONGODB_PW}@${MONGODB_HOST}/${DATABASE}?retryWrites=true&w=majority`,
      collection: 'sessions',
    }),
  })
);
app.use(passport.initialize());
app.use(passport.authenticate('session'));
passportIndex();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(PORT, () =>
      console.log(`Server is listening on ${PORT} | MOCK ${process.env.MOCK}`)
    );
  } catch (err) {
    console.error(err);
  }
};

start();
