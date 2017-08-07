import * as express from 'express';
import * as path from 'path';
import {Server} from 'ws';
import * as url from 'url';
import * as http from 'http';

const app = express();

const server =  http.createServer( app );
const wss: Server = new Server({ server });
console.log('WebSocket server is listening on port 8085');
wss.on('connection/', ( webSocket ) => {
  webSocket.send('This message was pushed by the WebSocket server');
});
// wss.on('connection/GetCurrentTime', ( webSocket ) => {
//   webSocket.send('Time to get paid');
// });

server.listen(8085, function listening() {
  console.log('Listening on %d', server.address().port);
});

