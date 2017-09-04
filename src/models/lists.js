const dbFuncs = require('./db/lists.js');

const createList = function(list) {
  dbFuncs.create(list);
};

//editListName

//deleteList

//showList (including all items on list)

module.exports = {
  createList
};
