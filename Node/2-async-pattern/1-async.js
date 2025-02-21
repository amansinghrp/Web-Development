const {log} = require('console');
const { write } = require('fs');
// const {readFile, read} = require('fs');
const util = require('util');
// const readFilePromise = util.promisify(readFile);
const {readFile, writeFile} = require('fs').promises;

// const start = async() =>{
//     try{
//         log("first");
//         const first = await readFilePromise('./content/first.txt', 'utf8');
//         log(first)
//         log('second')
//         const second = await readFilePromise('./content/second.txt', 'utf8')
//         log(second);
//     }
//     catch(error){
//         log(error)
//     }
// }

//used other function for promisifying
const start = async() =>{
    try{
        log("first");
        const first = await readFile('./content/first.txt', 'utf8');
        log(first)
        log('second')
        const second = await readFile('./content/second.txt', 'utf8')
        log(second);
        log("writing to file");
        writeFile('./content/result-async.txt', `This is mind boggling: ${first} : ${second}\n`, {flag:'a'});
        log("written");
    }
    catch(error){
        log(error)
    }
}


start();


// //this is still messy --> hence we use the util module to promisify the functions
// const getText = (path) =>{
//     return new Promise((resolve, reject) =>{
//         readFile(path, 'utf8', (err, res) =>{
//             if(err){
//                 reject(err)
//                 return;
//             }    
//             resolve(res);
//         })
//     })
// }

// log("first");
// getText('./content/first.txt');
// log('second')
// getText('./content/second.txt')

