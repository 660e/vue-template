import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.send(JSON.stringify({ code: 10001, message: 'Connected to WebSocket server' }));

  ws.on('message', (message) => {
    console.log('Received:', message);

    setInterval(() => {
      ws.send(JSON.stringify({ code: 10000, message: new Date().toISOString() }));
    }, 5000);
  });

  ws.on('close', () => {});

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});
