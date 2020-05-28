const fs = require("fs");


// Synchronous read
const file = process.argv[2]
const data = fs.readFileSync(file);
const temp = data.toString().split('\n');

console.log(temp.length-1);