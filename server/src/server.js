import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import passport from 'passport';
import bodyParser from 'body-parser';
import compression from 'compression';
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';
import { mongoDBURL, connect } from './schemas/index.js';
import routes from './routes/index.js';
import passportConfig from './middleware/passportConfig.js';
import checkFeatureFlag from './utils/featureFlags.js';
import RateLimit from 'express-rate-limit';

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5
});

dotenv.config();

const { FRONT_URL, FRONT_URL_DEPLOYED, SECRET_KEY } = process.env;

const PORT = process.env.PORT || 10010;
const MongoDBStore = connectMongoDBSession(session);
const sessionStore = new MongoDBStore({
  uri: mongoDBURL,
  collection: 'sessions',
});

const sessionOptions = {
  secret: `${SECRET_KEY}`,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: 1000 * 60 * 60 },
};

const whitelist = [FRONT_URL, FRONT_URL_DEPLOYED];

const corsOptions = {
  origin: whitelist,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
connect();

app.use(logger('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.authenticate('session'));
passportConfig();
app.use(limiter);
app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
      checkFeatureFlag();
    });

    try {
      await new Promise((resolve, reject) => {
        sessionStore.clear(err => {
          if (err) {
            console.error('Error destroying sessions:', err);
            reject(err);
          } else {
            resolve();
          }
        });
      });
    } catch (err) {
      console.error('Error during server shutdown:', err);
    }
  } catch (err) {
    console.error(err);
  }
};

start();
