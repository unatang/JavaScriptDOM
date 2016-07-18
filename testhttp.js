var http = require('http');

http.createServer(handle_request).listen(2333);

function handle_request(req, res) {
	console.log(req.url);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('<p>Hello world!</p>');
}