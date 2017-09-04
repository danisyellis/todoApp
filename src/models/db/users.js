const db = require('./db');

const createUser = function(email,password) {
  console.log("I might be making a user in the db");
  db.oneOrNone(
    `INSERT INTO account (email, password)
    VALUES ($1, $2)
    RETURNING *
    `, [email, password]
  )
  .catch(err => {
    console.log(err);
    throw err;
  });
};

const getUser = function() {

};

module.exports = {
  createUser,
  getUser
};
