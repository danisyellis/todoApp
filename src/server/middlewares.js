//ex findBySessionId()

//this file will probably call the functions that will be written in models/sessions.js   -for authorization

//difference between this file and authorization folder? A: write the auth functions in auth, and then call them here with middleware. It's only middleware if it has a req, res, etc.
const users = require('../models/users');
const auth = require('../auth/authentication.js');
//is this where I'll add bcrypt, probably not- prob abstract it out more

const notFound = function(req, res) {
    res.status(404).render('common/not_found');
  };

const errorHandling = function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).render('common/error');
};

const addUserToDB = function(userInfoSubmitted) {
  auth.encryptPassword(userInfoSubmitted.password)
  .then(hashedPassword => {
  users.createUser(userInfoSubmitted.email, hashedPassword)
  .then(user => {return user;});
  });
};

const checkPassword = function(userInfoSubmitted) {
  //use bcrypt to check and see if the userInfoSubmitted.password is the same as the one in the db
  //users.getPasswordById(userInfoSubmitted.username)
};

  module.exports = {
    notFound,
    errorHandling,
    addUserToDB,
    checkPassword
  };
