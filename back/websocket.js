const wss = new ws.Server({
  port: 5000,
}, () => console.log('Server started on 5000'));

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    message = JSON.parse(message);
    switch (message.event) {
      case 'message':
        broadcastMessage(message);
        break;
      case 'connection':
        broadcastMessage(message);
        break;
    }
  });
});

function broadcastMessage(message, id) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}
