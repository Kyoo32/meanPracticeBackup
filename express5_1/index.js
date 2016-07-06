var express =require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');

app.get('/gugudan_list', function(req, res){
  res.render('gugudan_list');
});

app.get('/gugudan', function(req, res){
  res.render('gugudan', {time: req.query.dan});
});

app.get('/', function(req, res){
  res.render('index',{name:req.query.name});
});


app.get('/about', function(req,res){
  res.render('about');
});


app.get('/mobile', function(req, res){
    res.render('mobile');
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
