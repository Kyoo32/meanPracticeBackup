

var fs = require('fs');


fs.readFile('gugudan.js', {encoding: 'utf8'}, function(error, data){
  if(error){
    return console.error(error.message);
  }
  console.log(data);
})



//__filename : pwd
//absolute path
// 'filename': current path
