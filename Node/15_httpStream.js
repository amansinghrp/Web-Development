const http = require('http')

const server = http.createServer();
const fs = require('fs');
server.on('request', (req, res) =>{
    //without stream
    // const text = fs.readFileSync('./content/big_file.txt', 'utf8');
    // res.end(text);

    //using streams --> sendign data in chunks
    const {createReadStream} = require('fs');
    const fileStream = createReadStream('./content/big_file.txt', 'utf8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res);
    })

    fileStream.on('error', (err)=>{
        res.end(err)
    })

})

server.listen(5000)