const {readFile, writeFile} = require('fs')

//we use callback functions

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }

    console.log(`The first text file: ${result}`);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err);            
            return;
        }

        console.log(`The secodn file text: ${result}`);
        const second = result

        writeFile('./content/result_async.txt', `The concatenated data: ${first} + ${second}`,{flag:'a'}, (err, result) =>{
            if(err){
                console.log(err);
                return;
            }

            //result is undefined as we are writing data in this function
        })
        
    })
})
