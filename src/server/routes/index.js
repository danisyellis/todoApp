const router = require('express').Router();
const sessionRoutes = require('./sessionRoutes');
const middlewares = require('../middlewares.js');


router.get('/home', function(req,res) {
  res.send('home');
});

router.get('/', function(req,res) {
  //I will eventually call a function (inside of models/sessions?) to get the stuff for this particular person
  res.end();
});

router.use('/', sessionRoutes);

router.use(function(req, res) {
  middlewares.notFound(req, res);
});

router.use(function(err, req, res, next) {
  middlewares.errorHandling(err, req, res, next);
});

module.exports = router;
