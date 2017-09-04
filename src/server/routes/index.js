const router = require('express').Router();
const sessionRoutes = require('./sessionRoutes');
const itemRoutes = require('./itemRoutes');
const listRoutes = require('./listRoutes');
const middlewares = require('../middlewares.js');


router.get('/home', function(req,res) {
  res.send('home');
});

router.use('/', sessionRoutes);

router.get('/', function(req,res) {
  //I will eventually call a function (inside of models/sessions or maybe change it to be named users?) to get the stuff for this particular person
  res.end();
});

router.use('/items', itemRoutes);
router.use('/lists', listRoutes);

router.use(function(req, res) {
  middlewares.notFound(req, res);
});

router.use(function(err, req, res, next) {
  middlewares.errorHandling(err, req, res, next);
});

module.exports = router;
