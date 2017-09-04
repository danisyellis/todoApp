const router = require('express').Router();
const middlewares = require('../middlewares');

router.get('/signup', function(req, res) {
  res.render('session/signup');
});

router.post('/signup', function(req, res) {
  middlewares.addUserToDB(req.body)
  .then((user) => {
    console.log(user, "hi from sessionRoutes");
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
  //TODO: if don't find the user in the db, let message = "email and password don't match"   res.redirect('session/login', {message})
  //also, make sure user is still accessible for making the req.session.user
  middlewares.checkPassword(req.body)
  .then(passwordCorrect => {
    if(passwordCorrect) {
      console.log("User logged in");
      //this needs to be the info from the db
      req.session.user = req.body;
      console.log(req.session.user, "session.user");
      //make this correct
      res.redirect('/');
    } else {
      let message = "username and password don't match";
      res.redirect('session/login', {message});
    }
  });
});


module.exports = router;
