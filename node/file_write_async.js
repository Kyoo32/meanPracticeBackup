var fs = require('fs');
var data = "async writer";



fs.writeFile(__dirname + '/file.txt', data, {flag : 'a'},function(error, data){
  if(error){
    return console.error(error.message);
  }
})

//callback in the end
//error argu first


//flag : r, w, wx, a
