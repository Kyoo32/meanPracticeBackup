var express =require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.type('text/plain');
  res.redirect('/about');
});


app.get('/about*', function(req, res){
  res.sendFile(__dirname + '/about.html');
});

var names = [
   {id : 0, name : 'honggildong'},
   {id : 1, name : 'kimgisha'}
];


app.get('/names/:id', function(req, res){
  res.type('text/plain');
  res.send('Person ' + req.params.id+ ' is ' + names[req.params.id].name);
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
