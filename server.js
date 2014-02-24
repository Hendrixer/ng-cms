var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ams');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error: '));
db.on('open', console.log.bind(console, 'db connection successful'));


var app = express();

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/src/index.html');
});

require('./app/routes/page')(app);


module.exports = app;
