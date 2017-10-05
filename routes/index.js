var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Daily Adventures', subtitle: 'Ths Story of My Life' });
});

module.exports = router;
