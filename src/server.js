const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./server/routes');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  //then require the files as contacts/show.ejs, etc.

app.use(morgan('dev'));

app.use(session({
  //  store: new (require('connect-pg-simple')(session))(),
  key: "user_id",
  secret: "I'm sooooooo secret",
  resave: false,
  saveUninitialized: false,
  cookie: { expires: 600000}
}));
app.use(cookieParser());

app.use('/', routes);


app.listen(3000, function() {
  console.log("Guinan says hi!");
});
