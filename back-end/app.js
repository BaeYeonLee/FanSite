const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerOpt = require('./config/swagger')

const app = express()
const cors = require('cors')

// CORS 설정
app.use(cors())

// ENV 설정
require('dotenv').config()

/*-----------------------------------------------
  Body-parser
------------------------------------------------*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*-----------------------------------------------
  Swagger
------------------------------------------------*/
const swaggerSpec = swaggerJSDoc(swaggerOpt)

/*-----------------------------------------------
  Modules
------------------------------------------------*/
const indexRouter = require('./routes/index')
const users = require('./routes/users')
const album = require('./routes/album')
const history = require('./routes/history')
const program = require('./routes/program')

/*-----------------------------------------------
  Routes
------------------------------------------------*/
app.use('/', indexRouter)
app.use('/users', users)
app.use('/album', album)
app.use('/history', history)
app.use('/program', program)

// Swagger routes
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { explorer: true }),
)
app.get('/api-docs.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

/*-----------------------------------------------
  Auto-generated code
------------------------------------------------*/

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
// OR ejs - by. BY
// app.set('view engine', 'ejs');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
