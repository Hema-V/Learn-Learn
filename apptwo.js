var http = require('http');
http.createServer(function(req,res) {
res.writeHead(200, {
'Content-Type' : 'text/html'
});
res.write('<!doctype html>\n<html lang="en">\n' + 
'\n<meta charset="utf-8">\n<title>My smaple page title<\title>\n' +
'\n<h1> It's nice to see the page running></h1>\n'+
);
res.end();
}).listen('8888','127.0.0.1');



