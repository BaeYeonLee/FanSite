module.exports = {
  host: process.env.MONGODB_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
}