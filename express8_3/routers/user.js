var express = require('express');
var router = express.Router();

//var app = express();


router.get('/', function(req, res, next){
  res.send('user index');
});


router.get('/:id', function(req, res){
  console.log(req.params.id);
    var id = req.params.id;

    if (id == 0) next('route');
    else next();
  }, function(req, res, next){
    res.send('user id' + req.params.id);
  }

});


router.get('/:id', function(req, res){
  res.send('no user id ' + req.params.id);
})

module.exports = router;
