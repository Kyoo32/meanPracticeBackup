var express = require('express');
var app = express();
var path = require('path');


var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host : 'localhost',
//   user : 'nodejs',
//   password : 'express',
//   database : 'moodmon'
// });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// var bodyparser = require('body-parser').urlencoded({extended : true});
// app.use(bodyparser);
// app.use(bodyParser.json());

var pool = mysql.createPool({
  connectionLimt : 10,
  host : 'localhost',
  user : 'nodejs',
  password : 'express',
  database : 'moodmon'
});

app.get('/', function(req, res){
    pool.query('SELECT * from moodmon;', function(err, rows, fields) {
        if (err) throw err;
        res.render('index', {rows : rows, title: "hello"});
    } );
});



// app.get('/', function(req, res){
//   connection.connect();
//   connection.query('SELECT * from moodmon;', function(err, rows, fields) {
//     if (err) throw err;
//     res.send('The result is: ' + JSON.stringify(rows));
//   });
//   connection.end();
// });





app.set('port', process.env.PORT || 3000);

// var handlebars = require('express-handlebars').create({defaultLayout:'main'});
// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');




app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
