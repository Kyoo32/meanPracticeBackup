var express =require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.render('index',{title: 'Hey', name: req.query.name});
});

app.get('/about', function(req, res){
  console.log('about');
  res.render('about');
});


app.get('/mobile', function(req, res){

  res.render('about', {layout : 'mobile'});
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
