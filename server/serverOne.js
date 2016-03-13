/**
 * Created by acer1 on 3/13/2016.
 * A simple web server running on NodeJs.
 */

var http = require('http');
var port = 9090;
http.createServer(responseHandler).listen(port);
console.log('Server running at http://127.0.0.1:' + port + '/');

function responseHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Hello World - Life is a journey </h1></body></html>,');
}