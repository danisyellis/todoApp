const db = require('./db');

const create = function(item) {
  return db.query(
    `INSERT INTO list_item (name, list_id, importance)
    VALUES ($1::text, $2::int4, $3::text)
    RETURNING *`,
    [item.name, item.listId, item.importance]
  )
  .catch(error => { console.log(error.message);});
};

const deleteItem = function(id) {

};

const edit = function(id) {

};

module.exports = {
  create,
  deleteItem,
  edit,
};
