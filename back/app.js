require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./auth/passport');
require('./auth/passportGoogleSSO');

require('./db/models/user');

const passport = require('passport');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const api = require('./api');

const app = express();

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', api);

module.exports = app;
