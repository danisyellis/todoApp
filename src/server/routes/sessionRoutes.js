const router = require('express').Router();
const middlewares = require('../middlewares');

router.get('/signup', function(req, res) {
  res.render('session/signup');
});

router.post('/signup', function(req, res) {
  middlewares.addUserToDB(req.body)
  .then((user) => {
      res.redirect('/login');
  })
  .catch( err => {
    console.log("That username already exists");
    console.error(err.message);
    res.redirect('/signup');
  });

});

router.get('/login', function(req,res) {
  let message;
  if (!req.session.user) {
    res.render('session/login', {message});
} else {
  //make this redirect work correctly - to user's homepage
  res.redirect('/');
}
});

router.post('/login', function(req, res) {
  //take username and password from req.body. Check to see if pw matches. And set them to session.user, etc.
});


module.exports = router;
