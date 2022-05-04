require('dotenv').config();
const { Role } = require('./db/models');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const upload = require('./middlewares/upload.middleware');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/error.middleware');
const indexRouter = require('./routes');
const authRouter = require('./routes/auth.router');


const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(cors());
app.use(cookieParser());
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
app.use('/auth', authRouter);
app.use(errorMiddleware);

async function roleCreate() {
  await Role.create({ type: 'Покупатель' });
  await Role.create({ type: 'Продавец' });
  await Role.create({ type: 'Курьер' });
  await Role.create({ type: 'Администратор' });
}

// roleCreate();

app.listen(PORT, () => {
  console.log('server started on', PORT);
});
