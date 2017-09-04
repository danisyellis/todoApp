//ex findBySessionId()

//this file will probably call the functions that will be written in models/sessions.js   -for authorization

//difference between this file and authorization folder? A: write the auth functions in auth, and then call them here with middleware. It's only middleware if it has a req, res, etc.
const users = require('../models/users');
const auth = require('../auth/authentication.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//is this where I'll add bcrypt, probably not- prob abstract it out more

const notFound = function(req, res) {
    res.status(404).render('common/not_found');
  };

const errorHandling = function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).render('common/error');
};

const addUserToDB = function(userInfoSubmitted) {
  return auth.encryptPassword(userInfoSubmitted.password)
  .then(hashedPassword => {
    console.log(hashedPassword, "hashedPassword in middlewares");
    return users.createUser(userInfoSubmitted.email, hashedPassword);
  });
};

const checkPassword = function(userInfoSubmitted) {
  return users.getPassword(userInfoSubmitted.email)
  .then(passwordFromDb => {
    return auth.checkPassword(userInfoSubmitted.password, passwordFromDb);
  });
};

  module.exports = {
    notFound,
    errorHandling,
    addUserToDB,
    checkPassword
  };
