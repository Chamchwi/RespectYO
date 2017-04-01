var express = require('express');

var app = express();
var http = require('http');
http.createServer(app);

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(8000, function () {
    console.log("Listenning \t :8000");
});