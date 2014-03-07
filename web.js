// dependencies
var express = require('express');
var logfmt = require('logfmt');
var http = require('http');
var path = require('path');

var app = express();

app.use(logfmt.requestLogger());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// define routes
app.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

app.get('/users', function(req, res) {
	res.send("respond with a resource");
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
