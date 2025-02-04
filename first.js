var http = require('http');
var PORT=8080;
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(PORT);
console.log(`server running on 8080}`)