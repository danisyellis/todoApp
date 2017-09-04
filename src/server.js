const express = require('express');
const app = express();
const routes = require('./server/routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  //then require the files as contacts/show.ejs, etc.

app.use(morgan('dev'));

app.use('/', routes);


app.listen(3000, function() {
  console.log("Guinan says hi!");
});
