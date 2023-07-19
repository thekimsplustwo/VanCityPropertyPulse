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

dotenv.config();

const { SECRET_KEY } = process.env;

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

const origins = [process.env.FRONT_URL];
const corsOptions = {
  origin: origins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
connect();

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.authenticate('session'));
passportConfig();

app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);

const checkFeatureFlag = () => {
  console.log('============ Feature Flags ============');
  console.log(
    'Zillow API flag: Listing =',
    process.env.ZILLOW_API_LISTING.toLowerCase() === 'on' ? 'ON' : 'OFF'
  );
  console.log(
    'Zillow API flag: Detail  =',
    process.env.ZILLOW_API_PROPERTY_DETAIL.toLowerCase() === 'on' ? 'ON' : 'OFF'
  );
  console.log(
    'AUTH flag: verifyToken   =',
    process.env.AUTH.toLowerCase() === 'on' ? 'ON' : 'OFF'
  );
};

const start = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT} | MOCK ${process.env.MOCK}`);
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
