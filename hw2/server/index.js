const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const socketIO = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000"
  }
});

app.use(cors());

const usersOnline = {};

socketIO.on('connection', (socket) => {
  console.log(`${socket.id} user connected.`);
  usersOnline[`${socket.id}`] = socket.id;
  socketIO.emit('users', usersOnline);

  socket.on('private-message', ({ text, userId, to }) => {
    console.log(`to: ${to}`);
    socketIO.to(to).emit('private-message', {
      text: text,
      from: userId,
      to: to,
    });
    console.log(`from: ${userId}`);
    socketIO.to(userId).emit('private-message', {
      text: text,
      from: userId,
      to: to,
    });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    if (usersOnline[`${socket.id}`]) {
      delete usersOnline[`${socket.id}`];
    }
    socketIO.emit('users', usersOnline);
  });
});

const start = async () => {
  try {
    http.listen(8080);
  } catch (error) {
    console.error(`Error on server startup: ${error.message}`);
  }
};

start();

function errorHandler(error, req, res) {
  console.error(error);
  res.status(500).send({ message: 'Server error' });
}

app.use(errorHandler);

