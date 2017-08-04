import * as express from 'express';
import * as path from 'path';
import {Server} from 'ws';
// import {Url} from 'url';

const app = express();

// Serve http content
// extra comment
app.get('/', (request, response) => {
  console.log('get / ');
    response.sendFile(path.join(__dirname, '../client/client.html'));
});

app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

const httpServer = app.listen(8000, 'localhost', () => {
    const {address, port} = httpServer.address();
    console.log('HTTP Server is listening on %s %s', address, port);
});

// WebSocket Server
const wsServer: Server = new Server({port: 8085});
console.log('WebSocket server is listening on port 8085');
wsServer.on('connection', ( webSocket, request ) => {
  // const location = Url.parse(request.url, true);
  webSocket.send('This message was pushed by the WebSocket server');
});
