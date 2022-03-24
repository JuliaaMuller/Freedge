var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const db = require('./configs/db.config');
const cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ingredientsRouter = require('./routes/ingredients');
const authRouter = require('./routes/auth');
const recipesRouter = require('./routes/recipes');
const favoritesRouter = require('./routes/favorites');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cookieSession({
    name: "session",
    keys: [
      "40ed1e00-25ea-4136-bc6b-e7451fb3d11a",
      "f92c5252-5913-4bfa-82a6-1cffe026956f",
    ],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter(db));
app.use('/ingredients',ingredientsRouter(db));
app.use('/',authRouter(db))
app.use('/recipes',recipesRouter(db))
app.use('/favorites', favoritesRouter(db))




module.exports = app;
