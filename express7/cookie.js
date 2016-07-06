var express =require('express');
var app = express();
var cookieParser = require('cookie-parser');


app.set('port', process.env.PORT || 3000);
app.use(cookieParser());

app.get('/counter', function(req, res){
  var count = req.cookies.counter || 0;
  ++count;
  res.send('you click ' + count );
  res.cookie('counter', count,{
    maxAge : 10 * 1000
  });
});

app.get('/counter_clear', function(req, res){
  res.clearCookie('counter');
  res.redirect('/counter');
});





app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
