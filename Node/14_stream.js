//1
// const {createReadStream} = require('fs');

// const stream = createReadStream('./content/big_file.txt');

// stream.on('data', (result) =>{
//     console.log(result);    
// })

//2
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big_file.txt', {highWaterMark: 90000, encoding: 'utf8'});

stream.on('data', (result) =>{
    console.log(result);    
})

stream.on('error', (err) => console.log(err));

