console.log('journal - routes/index.js');
var express = require('express');
var router = express.Router();


// ===========

console.log('index.js - Build periodobj');
var fs = require("fs");
var content = fs.readFileSync("./public/datalists/periodref.json");
// console.log("Output Content: ", content);
var string = content;
var periodobj = JSON.parse(string);
console.log('periodobj size: ', periodobj.length)
// console.log("obj: ", periodobj);

// ===========


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Daily Adventures', subtitle: 'The Story of My Life',periodobj:periodobj });
});

module.exports = router;
