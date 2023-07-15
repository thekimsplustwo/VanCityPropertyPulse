import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';
import cookieParser from 'cookie-parser';
import connect from './schemas/index.js';
import routes from './routes/index.js';
import passportIndex from './middleware/index.js';

dotenv.config();

const { MONGODB_HOST, MONGODB_USER, MONGODB_PW, DATABASE, SECRET_KEY } =
  process.env;

const PORT = process.env.PORT || 10010;
const MongoDBStore = connectMongoDBSession(session);
const sessionStore = new MongoDBStore({
  uri: `mongodb+srv://${MONGODB_USER}:${MONGODB_PW}@${MONGODB_HOST}/${DATABASE}?retryWrites=true&w=majority`,
  collection: 'sessions',
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
app.use(express.static('public'));

// app.all('/*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH');
//   next();
// });

//app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());

app.use(
  session({
    secret: `${SECRET_KEY}`,
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
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
    await connect();
    server.listen(PORT, () =>
      console.log(`Server is listening on ${PORT} | MOCK ${process.env.MOCK}`)
    );

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
