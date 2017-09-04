const db = require('./db');

const create = function(list) {
  return db.oneOrNone(
    `INSERT INTO list (name, account_id)
    VALUES ($1::text, $2::int4)
    RETURNING *
    `,[list.name, list.account_id]
  )
  .catch(error => {throw error;});
};

module.exports = {
  create
};
