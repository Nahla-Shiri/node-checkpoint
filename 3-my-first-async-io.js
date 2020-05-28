const fs = require("fs");

const file = process.argv[2]
fs.readFile(file, function (err, data) {
   if (err) {
      return console.error(err);
   }

const temp = data.toString().split('\n');

console.log(temp.length-1);
});