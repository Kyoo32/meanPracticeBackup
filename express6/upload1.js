var express =require('express');
var app = express();

var formidable = require('formidable');

app.set('port', process.env.PORT || 3000);

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var bodyparser = require('body-parser').urlencoded({extended : true});
app.use(bodyparser);



app.get('/upload', function(req, res){
  res.render('upload');
});

app.post('/upload_do', function(req, res){
  var form = new formidable.IncomingForm();
  form.uploadDir = __dirname + '/uploads';
  form.keepExtenstions = true;

  form.parse(req);
  res.redirect(303, '/upload_ok');
});

app.get('/upload_ok', function(req, res){
  res.send('loginOk');
});

app.get('/upload_not', function(req, res){
  res.send('loginNot');
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
