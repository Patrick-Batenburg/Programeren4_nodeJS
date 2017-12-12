'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res)
{
    console.log('Er was een request.');
    res.writeHead(200, { 'Content-Type': 'text/json' });
    var json = JSON.stringify(
    {
        "results":
        [{
            "gender": "female",
            "name":
            {
                "title": "mrs",
                "first": "emma",
                "last": "kraft"
            },
            "location":
            {
                "street": "5042 bahnhofstraﬂe",
                "city": "kronach",
                "state": "bremen",
                "postcode": 65851
            },
            "email": "emma.kraft@example.com",
            "phone": "0819-5510816",
            "cell": "0170-0252955",
            "picture":
            {
                "large": "https://randomuser.me/api/portraits/women/64.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
            },
        }]
    });
    res.end(json);
}).listen(port);

console.log('De server luisterd op poort ' + port);