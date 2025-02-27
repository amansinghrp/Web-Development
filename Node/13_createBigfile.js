const {writeFileSync} = require('fs');
for(var i = 0; i<10000; i++){
    writeFileSync('./content/big_file.txt', `Aman Singh : ${i}\n`, {flag: 'a'});
}