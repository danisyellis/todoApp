const router = require('express').Router();
const dbFuncs = require('../../models/lists.js');

router.get('/new', (req,res) => {
  res.render('lists/new');
});

router.post('/new', (req,res, next) => {
  dbFuncs.createList(req.body)
  .then(newList => {
    if (newList) {return res.redirect(`/lists/${newList.id}`);}
    next();
  })
  .catch( error => {throw error;} );
});

router.get('/', (req,res) => {
  let list = {name:"Dani's List", items: ["fly", "sing", "code"]};
  res.render('lists/show.ejs', {list});
});



module.exports = router;
