
const numbers = process.argv.slice(2, process.argv.length);
let sum = numbers.reduce((a, b) => a + Number(b), 0);
console.log(sum);