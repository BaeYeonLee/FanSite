module.exports = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER_ID,
  password: process.env.MYSQL_USER_PW,
  connectionLimit: 4,
}
