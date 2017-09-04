const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword = function(submittedPassword) {
  //use bcrypt to hash password
  bcrypt.hash(submittedPassword, saltRounds)
  .then(hashedPassword => {
    console.log(hashedPassword)
    return hashedPassword;
  })
  .catch(error => {throw error;});
};

const checkPassword = function(submittedPassword, passwordFromDb) {
  bcrypt.compare(submittedPassword, passwordFromDb)
    .then(comparisonResult => {
      return comparisonResult;
    })
    .catch(error => {throw error;});
};

module.exports = {
  encryptPassword,
  checkPassword
};
