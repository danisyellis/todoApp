const dbFuncs = require('./db/items');

const createItem = function(item) {
  //change this later
  item.listId = 5;
  dbFuncs.create(item);
};

//createItem
  //call function to add when created
//deleteItem

//editItem

//function to tell when created

module.exports = {
  createItem
};
