var express =require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var bodyparser = require('body-parser').urlencoded({extended : true});
app.use(bodyparser);


var id = '';
var password = '';

app.get('/login', function(req, res){
  res.render('login');
});

app.post('/login_do', function(req, res){
  console.log(req.query.form);

  if(req.body.id == 'admin' && req.body.password == 'admin'){
    //res.send("yes");
    res.redirect(303, '/login_ok');
  } else {
    //res.send("no");
    res.redirect(303, '/login_not');
  }
});

app.get('/login_ok', function(req, res){
  res.render('loginOk');
});

app.get('/login_not', function(req, res){
  res.render('loginNot');
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
