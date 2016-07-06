var http = require('http');

function hello(req, res){
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end("Hello World");
}


http.createServer(hello).listen(3000);

console.log("Server started on localhost:3000 press Ctrl + c to terminate....");
