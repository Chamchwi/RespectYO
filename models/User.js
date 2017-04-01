var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    age: Number,
    gender: Number, // 0: men, 1: women
    nickname: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('user', userSchema);