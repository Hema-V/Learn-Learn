var http = require('http');
http.createServer(function(req, res){
res.writeHead(200, {
'Content-Type': 'text/html'});
res.write('<!doctype html>\n<html lang="en">\n' +
'\n<meta charset="utf-8">\n<title>first webpage on node.js</title>\n' +
'\n\n<h1>This is my first application in node.js</h1>\n');
res.end();
}).listen(8888,'127.0.0.1');
console.log('server running at http://127.0.0.1:8888');

