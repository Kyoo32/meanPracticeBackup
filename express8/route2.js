
var express =require('express');
var user_route = require('./routers/user');


var app = express();
console.log('hello');


app.set('port', process.env.PORT || 3000);
app.use('/user', user_route);


app.listen(app.get('port'), function(){
  console.log('Express started on http://locathost' + app.get('port') + ': press Ctrl + C to terminate');
});
