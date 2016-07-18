var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	user: "lyon",
	password: "333588",
	database: "lyon"
});
connection.connect();

function serve_page(req, res) {
	req.parsed_url = url.parse(req.url, true);
	var core_url = req.parsed_url.pathname;
	console.log(core_url);
	if (core_url == '/') core_url = '/chat.html';
	if (core_url == '/message.html') {
		console.log("add comment");
		var data = req.parsed_url.query;
		console.log(data);
		// connection.query(`insert into comment set comment=?`, [data.comment]);
		connection.query(`insert into chatmessage set name=?, message=?`, [data.name, data.message]);
		if (!isEmptyObject(data)) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end("<p>" + data.name + ': ' + data.message + "</p>");
		}
	}
	fs.readFile(
		'.' + core_url, 
		function (err, contents) {
			if (err) {
				console.log('there is an error');
				send_failure(res, 500, err);
			} else {
			
				contents = contents.toString('utf8');
			
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(contents);
			}
		}
	);
}

function isEmptyObject(object) {
	for (var key in object){
		return false;
	}
	return true;
}

function send_failure(res, code, err) {
	res.writeHead(code, { "Content-Type": "application/json" });
	res.end(JSON.stringify(err) + '\n');
}

http.createServer(serve_page).listen(3000);