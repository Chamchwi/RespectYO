var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
    title: String,
    content: String,
    writer: String,
    category: Number
});

module.exports = mongoose.model('board', boardSchema);