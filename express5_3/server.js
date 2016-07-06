var express =require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var users = [
  {'name': 'gildong', 'phone' : '010-2421-1212'},
  {'name': 'minsu', 'phone' : '010-2421-1214'},
  {'name': 'chulsu', 'phone' : '010-2421-1225'}
];


app.get('/', function(req, res){
  console.log('index');
  res.render('user', {users : users, title : 'hongsi'});
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
