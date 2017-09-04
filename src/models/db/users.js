const db = require('./db');

const createUser = function(email,password) {
  return db.oneOrNone(
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

const getUser = function(email) {
  return db.oneOrNone(
    `SELECT * FROM account
    WHERE email = $1`, [email]
  )
  .catch(err => {
    console.log(err);
    throw err;
  });
};

module.exports = {
  createUser,
  getUser
};
