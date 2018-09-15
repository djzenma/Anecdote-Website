var express = require('express');
var app = express();
var parser = require('body-parser');

// requiring socket.io
var server = require('http').Server(app);
var io = require('socket.io')(server);

// setting up view engine
app.set('views', './views');
app.set('view engine', 'ejs');
// parsing data
app.use(parser.json());

// serving files and handling routes
app.use(express.static('./public'));
app.use(require('./routes/home'));
app.use(require('./routes/api'));

// listening for live socket connection
io.on('connection', function (socket) {
    socket.on('posted', function (data) {
        io.emit('posted', data);
    })
});

// listening to port
server.listen(3000);

console.log("server running");