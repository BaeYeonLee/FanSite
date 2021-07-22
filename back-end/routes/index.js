const express = require('express')
const router = express.Router()

/*-----------------------------------------------
  Route Modules
------------------------------------------------*/
const users = require('./users')
const album = require('./album')
const board = require('./board')
const filmography = require('./filmography')
const history = require('./history')
const track = require('./track')

router.use('/users', users)
router.use('/album', album)
router.use('/board', board)
router.use('/filmography', filmography)
router.use('/history', history)
router.use('/track', track)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
