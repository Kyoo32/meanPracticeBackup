var express =require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

//var bodyparser = require('body-parser').urlencoded({extended : true});
//app.use(bodyparser);
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});







app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
