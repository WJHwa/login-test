const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_CONNECTIONLIMIT,
  user: process.env.DB_USER,
  password: process.env.DB_PSWORD,
});

db.connect();

module.exports = db;
