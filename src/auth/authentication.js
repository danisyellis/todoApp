const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword = function(submittedPassword) {
  return bcrypt.hash(submittedPassword, saltRounds);
};

const checkPassword = function(submittedPassword, passwordFromDb) {
  return bcrypt.compare(submittedPassword, passwordFromDb);
};

module.exports = {
  encryptPassword,
  checkPassword
};
