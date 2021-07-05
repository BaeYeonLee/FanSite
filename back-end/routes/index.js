const express = require('express')
const router = express.Router()

/*-----------------------------------------------
  Route Modules
------------------------------------------------*/
const users = require('./users')
const album = require('./album')
const history = require('./history')
const program = require('./program')

router.use('/users', users)
router.use('/album', album)
router.use('/history', history)
router.use('/program', program)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
