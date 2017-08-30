const router = require('express').Router();
const sessionRoutes = require('./sessionRoutes');

router.get('/home', function(req,res) {
  res.send('home');
});

router.use('/', sessionRoutes);

module.exports = router;
