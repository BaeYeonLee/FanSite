const mongoose = require('mongoose')
const config = require('../config/mongodb')

mongoose.Promise = global.Promise
mongoose.createConnection(config.host, config.options)

const comment = new mongoose.Schema({
  comment: String,
  user: String,
  password: String,
  created_at: String,
  updated_at: String,
})

const Board = new mongoose.Schema({
  title: String,
  user: String,
  board_type: String,
  password: String,
  content: String,
  recommend: Integer,
  comments: [comment],
  created_at: String,
  updated_at: String,
})

module.exports = mongoose.model('Board', Board)
