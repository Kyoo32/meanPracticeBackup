var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
  if(req.url == '/'){
      goHome(res);
    }
}).listen(3000, "127.0.0.1");

var goHome = function(res){
  getJson(res);
}

var getJson = function(res){
  fs.readFile('./callback_text.json', function(err, data){
    if(err)errorHappen(res,err);
    var titles = JSON.parse(data.toString());
    getTemplate(res,data, titles);
  });
}

var getTemplate = function(res, data, titles){
  fs.readFile('./callback_template.html', function(err, data){
    if(err)errorHappen(res,err);
    listJson(res, data,titles);
  });
}
var listJson = function(res, data,titles){
  var tmpl = data.toString();
  var html = tmpl.replace("%", titles.join("</li><li>"));
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end(html);
}
var errorHappen = function(res,err){
  console.error(err);
  res.end("Server Error");
}
