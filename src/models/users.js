const dbFuncs = require('./db/users');

//getAllListsForUser

const createUser = function(email, password) {
  return dbFuncs.createUser(email,password);
};

const getPassword = function(email) {
  return dbFuncs.getUser(email)
  .then(user => {return user.password;});
};

module.exports = {
  createUser,
  getPassword
};
