console.log('journal - models/journal.js');
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

// var Schema = mongoose.Schema;

var Journal = mongoose.model('journal',
  {
    userid: String,
    entryid: String,
    dbid: String,
    entdate: String,
    dateconvt: String,
    entperiod: String,
    periodcode: String,
    enttitle: String,
    journalentry: String
});

//  Journal.plugin(timestamps);

module.exports = Journal;
