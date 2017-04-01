var express = require('express');

var app = express();
var http = require('http');
http.createServer(app);
var mongoose = require('mongoose');

var User = require('./models/user.js');
var Board = require('./models/board.js');

var body_parser = require('body-parser');
app.use(body_parser.json()); // support json encoded bodies
app.use(body_parser.urlencoded({
    extended: true
})); // support encoded bodies

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
    console.log("Connected to \t DB");
});

mongoose.connect('mongodb://localhost/respectyo');


app.get('/', function (req, res) {
    res.send('RespectYO');
});

app.post('/register', function (req, res) {
    var age = req.body.age;
    var gender = req.body.gender;
    var nickname = req.boby.nickname;

    var user = new User({
        age: req.body.age,
        gender: req.body.gender,
        nickname: req.body.nickname
    })
    user.save(function (err, user) {
        if (err) {
            return res.json({
                success: false
            });
        }
        return res.json({
            success: true
        });
    });
});

app.post('/User/list/', function (req, res) {
    
});

app.post('/board/view/:category', function (req, res) {
    var category = req.params.category;
});

app.post('/board/write/:category', function (req, res) {

});

app.listen(8000, function () {
    console.log("Listenning \t :8000");
});