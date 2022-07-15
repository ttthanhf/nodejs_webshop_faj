require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : process.env.DB_MYSQL_HOST,
	user     : process.env.DB_MYSQL_USER,
	password : process.env.DB_MYSQL_PASSWORD,
	database : process.env.DB_MYSQL_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the MySQL server !');
  });

module.exports = connection;