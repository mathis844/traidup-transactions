var mysql = require('mysql')

var connection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});

exports.getAll = function(callback) {
	// return all transactions that haven't been deleted
	connection.query('SELECT * FROM transactions WHERE deleted_at IS NULL', 
		function(err, rows, fields) {
			callback(err, rows);
		});
}
