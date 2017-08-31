const express = require('express');
const app = express();
const routes = require('./server/routes');
const morgan = require('morgan');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));

app.use('/', routes);


app.listen(3000, function() {
  console.log("Guinan says hi!");
});
