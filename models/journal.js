console.log('journal - models/journal.js');
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

// var Schema = mongoose.Schema;

var ReviewSchema = require('./review');

var Journal = mongoose.model('journal',
  {
    userid: String,
    entryid: String,
    dbid: String,
    entdate: String,
    entperiod: String,
    entry: String
);

  Journal.plugin(timestamps);

module.exports = Journal;
