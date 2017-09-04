const dbFuncs = require('./db/users');

//getAllListsForUser

const createUser = function(email, password) {
  dbFuncs.createuser(email,password);
};

module.exports = {
  createUser
};
