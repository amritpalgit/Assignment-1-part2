
var express = require('express');
var router = express.Router();

// Routes

router.get('/', function(req, res, next) {
  res.render('pages/about.pug', {'page': 'contactus'});
});

//Exports

module.exports = router;