var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var routes_v1 = require('./api/routes_v1');
//var routes_v2 = require('./api/routes_v2');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.use('/api/v1', routes_v1);
//app.use('/api/v2', routes_v2);

app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.set('port', (process.env.PORT || config.webPort));
app.set('env', (process.env.ENV || 'development'));

app.use(logger('dev'));

app.listen(port, function()
{
    console.log('De server luitert op port ' + port);
});

module.exports = app;