let mysql = require('mysql')

let connection = mysql.createConnection({
	host: process.env.MYSQL_PORT_3306_TCP_ADDR,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});

// connection.connect(function(err) {
//   if (err) {
//   	console.error("Cannot connect to " + process.env.MYSQL_HOST)
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// function getConnection() {
// 	if
// }

exports.getAll = (callback) => {
	connection.query('SELECT * FROM transactions', function(err, rows, fields) {
		callback(err, rows);
	});
}
