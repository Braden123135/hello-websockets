const express = require('express');
const http = require('http');

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(8080,function(){
    console.log('App listening on poert 8080');
});