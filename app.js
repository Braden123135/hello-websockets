const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const wss = new WebSocket.Server({server:server});
wss.on('connection',function(wss,request){
    console.log('Connected');
});

server.listen(8080,function(){
    console.log('App listening on poert 8080');
});