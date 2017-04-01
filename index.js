var express = require('express');

var app = express();
var http = require('http');
http.createServer(app);
var mongoose = require('mongoose');

var body_parser = require('body-parser');
app.use(body_parser.json()); // support json encoded bodies
app.use(body_parser.urlencoded({
    extended: true
})); // support encoded bodies


app.get('/', function (req, res) {
    res.send('RespectYO');
});

app.post('/register', function (req, res) {
    var age = req.body.age;
    var gender = req.body.gender;
});

app.post('/board/view/:category', function (req, res) {
    var category = req.params.category;
});


app.listen(8000, function () {
    console.log("Listenning \t :8000");
});