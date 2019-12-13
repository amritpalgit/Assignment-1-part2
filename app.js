var express = require('express');
var app = express();
var path = require('path');
app.set('view engine', 'pug');

	// router page linking
var contactus = require('./routes/contactus');
var aboutme = require('./routes/aboutme');
var myprojects = require('./routes/myprojects');
var services = require('./routes/services');

	// make views default directory and public directory for local routing for css and images and js
app.locals.basedir = path.join(__dirname, 'views');
app.use(express.static(path.join(__dirname+"public")));
app.use(express.static(path.join(__dirname, 'public')));

	// user click listner
app.use('/css', express.static('css'))
app.use('/aboutme', aboutme);
app.use('/myprojects', myprojects);
app.use('/services', services);
app.use('/contactus', contactus);


	// basic page load
app.get('/', (req, res) => {
  res.render('index');
});

	// port reserving
app.listen(3000, () => {
  console.log('Listening on port 3000...');
});