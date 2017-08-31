//ex findBySessionId()

//this file will probably call the functions that will be written in models/sessions.js   -for authorization

//difference between this file and authorization folder? A: write the auth functions in auth, and then call them here with middleware. It's only middleware if it has a req, res, etc.


const notFound = function(req, res) {
    res.status(404).render('common/not_found');
  };

const errorHandling = function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).render('common/error');
};

  module.exports = {
    notFound,
    errorHandling
  };
