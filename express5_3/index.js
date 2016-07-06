var express =require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  console.log('index');
  res.render('index', {name : req.query.name});
});


app.get('/about', function(req, res){
  console.log('about');
  res.render('about');
});

app.get('/mobile', function(req, res){
  console.log('mobile');
  res.render('mobile');
});



app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
