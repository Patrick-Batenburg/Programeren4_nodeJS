var express = require('express');
var routes = express.Router();

var mijnObject =
{
    mijntekst: 'Hello World!'
};

routes.get('/hello', function (req, res)
{
    res.contentType('application/json');
    res.status(200);
    res.json(mijnObject);
});

routes.post('/hello', function (req, res)
{
    var body = req.body;
    console.dir(body);
    res.contentType('application/json');
    res.status(200);
    res.json(mijnObject);
});

routes.get('/hello/error', function (req, res, next)
{
    next('HIER TREEDT EEN ERROR OP');
});

routes.get('/hello/*', function (req, res, next)
{
    res.contentType('application/json');
    console.log('contenttype toegevoegd');
    res.status(404);
    res.json(
    {
        message: 'Deze endpoint bestaat nog niet'
    });
    res.end();
});

module.exports = routes;