const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');
const { callbackify } = require('util');
const app = express();



let server = http.createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io =socketIO(server);
require('./sockets/socket.js');


// io comunicacion con el backend
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});