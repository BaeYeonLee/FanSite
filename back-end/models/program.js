const mongoose = require('mongoose')
const config = require('../config/mongodb')

mongoose.Promise = global.Promise
mongoose.createConnection(config.host, config.options)

const Program = new mongoose.Schema({
  title: String,
  role: String,
  start_date: String,
  end_date: String,
})

module.exports = mongoose.model('Program', Program)
