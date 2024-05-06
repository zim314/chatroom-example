import express from 'express';
import http from 'http';
import chatroom from './websocket';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('server 正在運行中...');
});

chatroom();

server.listen(4545, () => console.log('目前正在聆聽 post: 4545'));
