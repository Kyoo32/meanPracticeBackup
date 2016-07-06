var express =require('express');

var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.type('text/plain');
  res.send('Express Index');
});

var mytext = require('./lib/mytext');

app.get('/mytext', function(req, res){
  res.type('text/plain');
  res.send(mytext.getMyText());
});


app.get('/handlebars', function(req, res){
  res.render('message', {title: 'Hey', message: 'Hi, this is Handlebars'});
});

app.get('/about*', function(req, res){
  res.type('text/plain');
  res.send('Express About!!!');
});
app.get('/about/contact', function(req, res){
  res.type('text/plain');
  res.send('Express About');
});

//app.use Must be below app.get
app.use(function(req, res){
  res.type('text/plain');
  res.status('404');
  res.send('404 - Not Found');
});


app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status('500');
  res.send('500 - Server Error');
})

app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
