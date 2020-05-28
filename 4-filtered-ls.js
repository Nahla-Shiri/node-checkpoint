const fs = require("fs");

const dir = process.argv[2]
fs.readdir(dir, function (err, files) {
   if (err) {
      return console.error(err);
   }

files.forEach( function (file) {
	
	let ext = file.split('.').pop();
	if(file.endsWith(`.${process.argv[3]}`))
      console.log( file );
   });
});

 /* 2 :  solution 
 
    const fs = require('fs')
    const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })

*/