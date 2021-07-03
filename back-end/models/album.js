const mongoose = require('mongoose')
const config = require('../config/mongodb')

mongoose.Promise = global.Promise
mongoose.createConnection(config.host, config.options)

const Song = new mongoose.Schema({
  title: String,
  play_time: String,
  song_writer: String,
  lyricist: String,
})

const Album = new mongoose.Schema({
  name: String,
  titles: [Song],
  tracks: [Song],
  cover: String,
  desc: String,
  release_data: String,
  links: [String],
})

module.exports = mongoose.model('Album', Album)
