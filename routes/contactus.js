
var express = require('express');
var router = express.Router();

// Routes

router.get('/', function(req, res, next) {
  res.render('pages/contactus.pug', {'page': 'contactus'});
});

//Exports

module.exports = router;