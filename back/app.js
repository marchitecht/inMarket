require('dotenv').config();
const { Role } = require('./db/models');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const passport = require('passport');
const upload = require('./middlewares/upload.middleware');
require('./auth/passport');
require('./auth/passportGoogleSSO');

require('./db/models/user');

const api = require('./api');

const errorMiddleware = require('./middlewares/error.middleware');
const indexRouter = require('./routes');
const authRouter = require('./routes/auth.router');

const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(cors(
  {
    credentials: true,
    origin: process.env.CLIENT_URL,
  },
));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', api);
app.use(errorMiddleware);

module.exports = app;
