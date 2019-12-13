
var express = require('express');
var router = express.Router();

// Routes

router.get('/', function(req, res, next) {
  res.render('pages/myprojects.pug', {'page': 'myprojects'});
});

//Exports

module.exports = router;