require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const upload = require('./middlewares/upload.middleware');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = process.env.PORT ?? 3000;
// const indexRouter = require('./routes/index.router');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));
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

app.listen(PORT, () => {
  console.log('server started on', PORT);
});
