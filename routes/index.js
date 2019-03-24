var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

// GET signup
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

// POST signup
router.post('signup', function(req, res, next) {
  newUser = new loginSchema;
});
  

module.exports = router;
