const mongoose = require('mongoose')
const config = require('../config/mongodb')

mongoose.Promise = global.Promise
mongoose.createConnection(config.host, config.options)

const Users = new mongoose.Schema({
  account: String,
  password: String,
  name: String,
  phone: String,
  address: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
  createt_at: String,
  updated_at: String,
})

module.exports = mongoose.model('Users', Users)
