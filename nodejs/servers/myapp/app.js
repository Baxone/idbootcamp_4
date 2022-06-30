const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dayjs = require('dayjs');
const fs = require('fs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const personasRouter = require('./routes/personas');
const productsRouter = require('./routes/products');
const dashboardRouter = require('./routes/dashboard');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * INICIO MIDDLEWARES
 */

app.use((req, res, next) => {
  const currentDate = dayjs().format('DD/MM/YYYY 🥰 HH:mm');
  console.log(currentDate);
  next();
});

// Generamos dentro del middleware un número aleatorio. Si el número es mayor de 0.6 respondemos con un error. Si no, seguimos al siguiente manejador

app.use((req, res, next) => {
  const randomNum = Math.random();
  if (randomNum > 0.6) {
    res.end('El número es mayor de 0.6');
  } else {
    next();
  }
});

// Escriba en un fichero (logs/main.log) la siguiente línea:
// [FECHA] Método. Url
// [30-06-2022 15:06] Método: GET. Url: /dashboard/personas
// - appendFile de la librería fs
// El método y la url lo obtenemos del objeto req
// Cuando escribamos en el fichero, llamamos a next!
app.use((req, res, next) => {
  const content = `[${dayjs().format('DD-MM-YYYY HH:mm')}] Método: ${req.method}. Url: ${req.url}\n`;

  fs.appendFile('./logs/main.log', content, (err) => {
    next();
  });
});


// TODO: Descargar Postman

/**
 * FIN MIDDLEWARES
 */

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/personas', personasRouter);
app.use('/products', productsRouter);
app.use('/dashboard', dashboardRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
