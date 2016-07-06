var express =require('express');
var app = express();
var session = require('express-session');

app.set('port', process.env.PORT || 3000);

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(session({
  secret : "secret",
  resave : false,
  saveUninitialized : true
}));

var bodyparser = require('body-parser').urlencoded({extended : true});
app.use(bodyparser);

app.get('/login', function(req, res){
  if(req.session.login_ok =='yes'){
    res.render('loginOk', {login_id : req.session.login_id});
  }else {
    res.render('login');
  }
});

app.post('/login_do', function(req, res){
  console.log(req.query.form);

  if(req.body.name == 'kyoo' && req.body.password == 'admin'){
    //res.send("yes");
    req.session.login_ok = 'yes';
    req.session.login_id = req.body.name;
    res.redirect(303, '/login_ok');
  } else  {
    req.session.login_ok = 'no';
    //res.send("no");
    res.redirect(303, '/login_not');
  }
});

app.get('/logout', function(req, res){
//  req.session.login_ok = 'no';
  req.session.destroy();
  res.redirect('/login');
});

app.get('/login_ok', function(req, res){
  res.render('loginOk',{login_id : req.session.login_id});
});

app.get('/login_not', function(req, res){
  res.render('loginNot');
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
