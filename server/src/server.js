import tracer from "dd-trace";
import http from 'http';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import passport from 'passport';
import bodyParser from 'body-parser';
import compression from 'compression';
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';
import RateLimit from 'express-rate-limit';
import { mongoDBURL, connect } from './schemas/index.js';
import routes from './routes/index.js';
import passportConfig from './middleware/passportConfig.js';
import checkFeatureFlag from './utils/featureFlags.js';

tracer.init();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100,
});

dotenv.config();

const {
  FRONT_URL,
  FRONT_URL_DEPLOYED,
  DEPLOYABLE_URL,
  SECRET_KEY,
  ZILLOW_API_URL,
  EC2_DNS,
} = process.env;

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

const deployableUrls = DEPLOYABLE_URL.split(',');

const corslist = [FRONT_URL, FRONT_URL_DEPLOYED, ZILLOW_API_URL, EC2_DNS];

const whitelist = corslist
  .concat(deployableUrls)
  .filter(item => item !== undefined && item !== null && item !== '')
  .filter((value, index, self) => self.indexOf(value) === index);
const corsOptions = {
  origin: whitelist,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
//app.set('trust proxy', true);
connect();

app.use(logger('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../../client/build')));

app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.authenticate('session'));
passportConfig();
app.use(limiter);
app.use('/api', routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
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
