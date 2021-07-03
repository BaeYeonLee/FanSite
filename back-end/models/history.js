const mongoose = require('mongoose')
const config = require('../config/mongodb')

mongoose.Promise = global.Promise
mongoose.createConnection(config.host, config.options)

const History = new mongoose.Schema({
  title: String,
  desc: String,
  date: String,
})

module.exports = mongoose.model('History', History)
