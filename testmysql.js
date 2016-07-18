var mysql = require('mysql');
var fs = require('fs');
var path = require('path');
var moment = require('moment');

// var dateTime = new Date();
// console.log(dateTime.toString());
// console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'lyon', 
	password: '333588', 
	database: 'lyon', 
});

connection.connect();


var time = new Date();
date = moment(time).subtract(30, 'seconds').format('YYYY-MM-DD HH:mm:ss');
// console.log(time);
// console.log(moment(time).format('YYYY-MM-DD HH:mm:ss'));
connection.query(`select name, message, DATE_FORMAT(date, '%Y-%m-%d %H:%m:%s') as date from chatmessage where date > ?`, [date], function(err, rows, fields) {
	if (err) console.log('there is querying error');
	console.log(JSON.stringify(rows, null, 2));
});

// connection.query(`insert into chatmessage set name=?, message=?, date=?`, ['lyon', 'test insert', date]);

// connection.query(`insert into namelist set name=?, comment=?, date=?`, 
	// ['lyon', 'i love u', new Date()]);
	
// connection.query(`select name, comment, date from namelist`, function(err, rows, fields) {
	// if (err) console.log("there is an error");
	// for (var i=0; i<rows.length; i++) {
		// for (key in rows[i]) {
			// if (key == 'date') rows[i][key] = moment(rows[i][key]).format('YYYY-MM-DD HH:mm:ss');
		// }
	// }
	// fs.writeFile(path.join(__dirname, 'ex7.js'), JSON.stringify(rows, null, 4), function (err) {
		// console.log('successfully write in file');
	// });
// });

// for (var i=0; i<10; i++) {
	// connection.query(`insert into namelist set name=?, comment=?, date=?`,
		// ['lyon', 'this is a test', new Date()]
	// );
// }

// transform date
// connection.query(`select date from namelist`, function (err, rows, fields) {
	// if (err) console.log("Error");
	// else console.log(rows);
	// for (var i=0; i<rows.length; i++) {
		// for (key in rows[i]) {
			// if (key == 'date') rows[i][key] = moment(rows[i][key]).format('YYYY-MM-DD HH:mm:ss');
		// }
	// }
	// console.log(JSON.stringify(rows, null, 4));
// });

connection.end();