console.log('journal - routes/journals.js');
var express = require('express');
var router = express.Router();
var journal = require('../models/journal');
// var json = require('./public/datalists/periodref.json');
// var moment = require('moment');
// moment().format();

// ===========
console.log('journal.js - Build periodobj');
var fs = require("fs");
var content = fs.readFileSync("./public/datalists/periodref.json");
// console.log("Output Content: ", content);
var string = content;
var periodobj = JSON.parse(string);
console.log('periodobj size: ', periodobj.length)
// console.log("obj: ", periodobj);

// ===========

let appTitle ='My Daily Adventures';
let appSubTitle ='The Story of My Life';
// console.log('title: ',appTitle,'  subtitle: ', appSubTitle);
//
// function to entperiod string
function findRef(vtime) {
  console.log('journal.js - findRef');
  let valid = true;
  let lCnt = 0;
  let cMax = periodobj.length;
  while(valid=true) {
    if (periodobj[lCnt].refcode == vtime) {
      valid = false;
      console.log('findRef - vtime: ', vtime, periodobj[lCnt].refperiod);
      return periodobj[lCnt].refperiod;
    }
    lCnt++;
    if(lCnt == cMax) {
      return 'invalid code';
    };
  }
}
//
// 'Index' route listing
router.get('/', function(req, res) {
  console.log('journals.js using router.get/');
  journal.find(function(err, journals) {
    res.render('journals/index', {
      journals: journals,
      title: appTitle,
      subtitle: appSubTitle,
      periodobj: periodobj
    });
  });
});

// 'New' route
router.get('/new', function(req, res) {
  console.log('journals.js using router.get/new **');
  console.log('journals: ', journal);
  res.render('journals/new', {
    journal: journal,
    title: appTitle,
    subtitle: appSubTitle,
    periodobj: periodobj
  });
});

// 'search' route
router.get('/search', function(req, res) {
  console.log('journals.js using router.get/search');
  journal.find(function(err, journals) {
    res.render('journals/search', {
      journals: journals,
      title: appTitle,
      subtitle: appSubTitle,
      periodobj: periodobj
    });
  });
});

// 'Create' route
router.post('/', function(req, res) {
  console.log('journals.js using router.post/');
  let userid = req.body.userid;
  let dbid = req.body.dbid;
  let entdate = req.body.entdate;
  let dateconvt = entdate.substr(0,4)+entdate.substr(5,2)+entdate.substr(8,2);
  let periodcode = req.body.entperiod.substr(0,4);
  let entperiod = findRef(periodcode);
  let enttitle = req.body.enttitle;
  let journalentry = req.body.journalentry;
  let entryid = userid+dateconvt+periodcode;
  console.log('new - entryid: ',entryid);
  console.log('new - period: ',entperiod, ' period code: ',periodcode);


  journal.create({
    userid: userid,
    entryid: entryid,
    dbid: dbid,
    entdate: entdate,
    dateconvt: dateconvt,
    entperiod: entperiod,
    periodcode: periodcode,
    enttitle: enttitle,
    journalentry: journalentry
  }, function(err, journal) {
    res.redirect(`/journals/${journal._id}`);
      // res.redirect(`/journals/${journal._id}`,{ title: appTitle, subtitle: appSubTitle });
  });
});

// 'Show' route
router.get('/:id', function(req, res) {
  console.log('journals.js using router.get/id');
  let id = req.params.id;

  journal.findById(id, function(err, journal) {
    console.log('journals.js using router.get/id -journal.findById');
    res.render('journals/show', { journal: journal, title: appTitle, subtitle: appSubTitle  });
  });
});

// 'Edit' route
router.get('/:id/edit', function(req, res) {
  console.log('journals.js using router.get/id/edit');
  let id = req.params.id;
  console.log('journals.js using router.get/id/edit -- ID: ', id);

  journal.findById(id, function(err, journal) {
    console.log('journals.js using router.get/id/edit -journal.findById');
    res.render('journals/edit', { journal: journal, title: appTitle, subtitle: appSubTitle, periodobj: periodobj });
    console.log('period: ',journal.entperiod,'  period code: ',journal.periodcode);

  });
})

// Update journal route (data from the 'edit' and updates existing)
router.post('/:id', function(req, res) {
  console.log('journals.js using router.post/id');
  console.log('period: ', req.body.entperiod, ' period code: ', req.body.periodcode);
  let id = req.params.id;
  let userid = req.body.userid;
  let dbid = req.body.dbid;
  let entdate = req.body.entdate;
  let dateconvt = entdate.substr(0,4)+entdate.substr(5,2)+entdate.substr(8,2);
  // let entperiod = req.body.entperiod.substr(5);
  // let periodcode = req.body.entperiod.substr(0,4);
  let periodcode = req.body.entperiod.substr(0,4);
  let entperiod = findRef(periodcode);
  let enttitle = req.body.enttitle;
  let journalentry = req.body.journalentry;
  let entryid = userid+dateconvt+periodcode;
  console.log('update - entryid: ',entryid);
  console.log('update - period: ',entperiod, ' period code: ',periodcode);

  journal.findByIdAndUpdate(id, {
    userid: userid,
    entryid: entryid,
    dbid: dbid,
    entdate: entdate,
    dateconvt: dateconvt,
    entperiod: entperiod,
    periodcode: periodcode,
    enttitle: enttitle,
    journalentry: journalentry
    }, function(err, journal) {
    console.log('journals.js using router.get/id/edit -journal.findByIdAndUpdate');
    res.redirect(`/journals/${journal._id}`);
  });
});

// 'Delete' route
router.delete('/:id', function(req, res) {
  console.log('journals.js using router.delete/id: ', req.params.id);
  let id = req.params.id;

  journal.findByIdAndRemove(id, function(err) {
    res.redirect('/journals');
  });
});


module.exports = router;
