const express = require('express');
const mysql = require('mysql');
const app = express()
const cors = require('cors');

const PORT = process.env.PORT || 7001

app.use(cors())

const connection = mysql.createConnection({
	host: 'sql7.freemysqlhosting.net',
	user: 'sql7606502',
	password: 'jmrhwMqBR7',
	database: 'sql7606502'
})

app.listen(PORT, () => {
	console.log(`Server is ok on port ${PORT}`)
})

connection.connect(function(err){
	(err) ? console.log(err) : console.log(connection);
 });


 app.get('/api', (req, res) => {
	const sql = "SELECT * FROM chebyrek ORDER BY name DESC";
	connection.query(sql, function(err, results) {
	  if (err) throw err;
		res.json({ chebyrek: results });
	});
 });
