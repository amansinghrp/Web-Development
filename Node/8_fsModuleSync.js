const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/first.txt', 'utf8')

console.log(first)
console.log(second);

writeFileSync('./content/result_sync.txt', `The Result is : ${first}, ${second}`);
