var express = require('express');
var app = express();
var parser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(parser.json());

app.use(express.static('./public'));
app.use(require('./routes/home'));
app.use(require('./routes/api'));

app.listen(3000);

console.log("server running");