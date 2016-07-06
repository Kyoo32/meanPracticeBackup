var http = require('http');
var fs = require('fs');

var urlCheck = function(req, res){
  if(req.url == '/'){
      goHome(req, res);
  }else{
      goOther(req, res);
  }
}

var goHome = function(req, res){
  fs.readFile('./callback_text.json', function(err, data){
    if(err){errorHappen(err);};
  })
}

var goOther = function(req, res){
      var titles = JSON.parse(data.toString());
      fs.readFile('./callback_template.html', function(err, data){
        if(err){
          errorHappen(err);
        }
        else{
          var tmpl = data.toString();
          var html = tmpl.replace("%", titles.join("</li><li>"));
          res.writeHead(200, {'Content-Type' : 'text/html'});
          res.end(html);
        }
      });
}

var errorHappen = function(err){
  console.error(err);
  res.end("Server Error");
}

http.createServer(urlCheck(req, res)).listen(3000, "127.0.0.1");
