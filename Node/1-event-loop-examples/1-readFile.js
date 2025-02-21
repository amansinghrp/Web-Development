const {readFile} = require('fs');

console.log("Starting with the first task");

readFile('./content/first.txt', 'utf8', (err, res) =>{
    if(err){
        console.log("Some error occured: " + err);
        return; 
    }

    console.log(res);
    console.log("First task completed");   
})

console.log("Starting the next task");

