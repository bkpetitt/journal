console.log('journal - routes/index.js');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Daily Adventures', subtitle: 'This Story of My Life' });
});

module.exports = router;
