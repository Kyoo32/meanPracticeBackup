var express = require('express');
var router = express.Router();

//var app = express();


console.log('hello2');

router.get('/:id', function(req, res){
    var id = req.params.id;
    if (!id) {res.send('user index');}
    else if (id = 0) {res.send('no user id' + id);}
    else if (id > 0) {res.send('user id' + id);}

});


module.exports = router;
