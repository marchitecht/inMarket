/* eslint-disable default-case */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
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

// const http = require('http'); ///////////////
// const { Server } = require('socket.io'); //////////////////
const ws = require('ws');

require('./auth/passport');
require('./auth/passportGoogleSSO');

require('./db/models/user');

const cookieSession = require('cookie-session');
const authRouter = require('./routes/auth.router');
const indexRouter = require('./routes');
const productRouter = require('./routes/product.router');
const vendorRouter = require('./routes/vendor.router');
const errorMiddleware = require('./middlewares/error.middleware');
const api = require('./api');

const app = express();

app.use(cors(
  {
    credentials: true,
    origin: process.env.CLIENT_URL,
  },
));

/// ///////////////

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//   },
// });

// io.on('connection', (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on('join_room', (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on('send_message', (data) => {
//     socket.to(data.room).emit('receive_message', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('User Disconnected', socket.id);
//   });
// });
/// ////////////////////

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY],
}));

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/categories', productRouter);
app.use('/vendor', vendorRouter);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', api);
app.use(errorMiddleware);

// рабочий вариант чата
/// /////////////////////////////////////////
const wss = new ws.Server({
  port: 5001, clientTracking: false,

}, () => console.log('Server started on 5001'));

const clientMap = new Map();

wss.on('connection', (clientConnection) => {
  clientConnection.on('message', (message) => {
    // eslint-disable-next-line no-param-reassign
    message = JSON.parse(message);
    switch (message.event) {
      case 'message':
        console.log({ message });
        broadcastMessage(message, message.userId);
        break;
      case 'connection':
        console.log({ message });
        clientConnection.userId = message.userId;
        clientMap.set(message.userId, clientConnection);
        broadcastMessage(message, message.userId);
        break;
    }
  });
});

function broadcastMessage(message, id) {
  console.log({ id, message });
  clientMap.forEach((client) => {
    client.send(JSON.stringify(message));
    console.log(message.userId, client.userId);
    if (client.readyState === ws.OPEN) {
      client.send(JSON.stringify({
        payload: {
          userName: message.userName,
          message: message.message || 'connected',
          ownMessage: message.userId === client.userId,
        },
      }));
      console.log(message);
    }
  });
}
/// ////////////////////////////////////

module.exports = app;
