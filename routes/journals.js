console.log('journal - routes/journals.js');
var express = require('express');
var router = express.Router();
var journal = require('../models/journal');

// 'Index' route listing
router.get('/', function(req, res) {
  console.log('journals.js using router.get/');
  journal.find(function(err, journals) {
    res.render('journals/index', { journals : journals});
  });
});

// 'New' route
router.get('/new', function(req, res) {
  console.log(' using router.get/new');
  res.render('journals/new');
});

// 'Create' route
router.post('/', function(req, res) {
  console.log('journals.js using router.post/');
  let userid = req.body.userid;
  let entryid = req.body.entryid;
  let dbid = req.body.dbid;
  let entdate = req.body.entdate;
  let dateconvt = req.body.dateconvt;
  let entperiod = req.body.entperiod;
  let periodcode = req.body.periodcode;
  let enttitle = req.body.enttitle;
  let journalentry = req.body.journalentry;

  journal.create({
    userid: userid,
    entryid: entryid,
    dbid: dbid,
    entdate: entdate,
    dateconvt: dateconvt,
    entperiod: entperiod,
    periodcode: periodcode,
    enttitle: enttitle,
    journalentry:journalentry
    },
    function(err, journal) {res.redirect(`/journals/${journal._id}`);
  });
});

// 'Show' route
router.get('/:id', function(req, res) {
  console.log('journals.js using router.get/id');
  let id = req.params.id;

  journal.findById(id, function(err, journal) {
    console.log('journals.js using router.get/id -journal.findById');
    res.render('journals/show', { journal : journal });
  });
});

// 'Edit' route
router.get('/:id/edit', function(req, res) {
  console.log('journals.js using router.get/id/edit');
  let id = req.params.id;
  console.log('journals.js using router.get/id/edit -- ID: ', id);

  journal.findById(id, function(err, journal) {
    console.log('journals.js using router.get/id/edit -journal.findById');
    res.render('journals/edit', { journal: journal });
    console.log('period: ',journal.entperiod,'  period code: ',journal.periodcode);

  });
})

// Update journal route (data from the 'edit' and updates existing)
router.post('/:id', function(req, res) {
  console.log('journals.js using router.post/id');
  console.log('period: ', req.body.entperiod, ' period code: ', req.body.periodcode);
  let id = req.params.id;
  let userid = req.body.userid;
  let entryid = req.body.entryid;
  let dbid = req.body.dbid;
  let entdate = req.body.entdate;
  let dateconvt = req.body.dateconvt;
  let entperiod = req.body.entperiod.substr(5);
  let periodcode = req.body.entperiod.substr(0,4);
  let enttitle = req.body.enttitle;
  let journalentry = req.body.journalentry;
  console.log('period: ',entperiod, ' period code: ',periodcode);

  journal.findByIdAndUpdate(id, {
    userid: userid,
    entryid: entryid,
    dbid: dbid,
    entdate: entdate,
    dateconvt: dateconvt,
    entperiod: entperiod,
    periodcode: periodcode,
    enttitle: enttitle,
    journalentry:journalentry
  }, function(err, journal) {
    console.log('journals.js using router.get/id/edit -journal.findByIdAndUpdate');
    res.redirect(`/journals/${journal._id}`);
  });
});

// 'Delete' route
router.delete('/:id', function(req, res) {
  console.log('journals.js using router.delete/id');
  let id = req.params.id;

  journal.findByIdAndRemove(id, function(err) {
    res.redirect('/journals');
  });
});


module.exports = router;
