module.exports = function  (argv1="", argv2="") {
const fs = require('fs')
    const path = require('path')

    const folder = argv1
    const ext = '.' + argv2
    const temp = []
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
      
    });

}

