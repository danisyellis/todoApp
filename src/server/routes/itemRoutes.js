const router = require('express').Router();
const dbFuncs = require('../../models/items.js');

router.get('/new', function(req,res) {
  res.render("items/new");
});

router.post('/new', function(req,res) {
  dbFuncs.createItem(req.body);
  res.redirect('/');
});



module.exports = router;
