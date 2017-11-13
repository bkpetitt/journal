console.log('journal - models/journal.js');
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

// var Schema = mongoose.Schema;

var Journal = mongoose.model('journal', {
    userid: String,
    entdate: String,
    entperiod: String,
    enttitle: String,
    journalentry: String,
    source: String,
    entevent: String,
    meal: String,
    entertain: String,
    entertainurl: String,
    entryid: String,
    dateconvt: String,
    periodcode: String,
    dbid: String
});

//  Journal.plugin(timestamps);

module.exports = Journal;