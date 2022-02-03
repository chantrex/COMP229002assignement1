var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

/* GET projects page. */
router.get('/projects',indexController.projects);

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact me!' });
});

module.exports = router;
