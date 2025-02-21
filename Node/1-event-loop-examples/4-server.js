const { log } = require('console');
const http = require('http')
var cnt = 0
const server = http.createServer((req, res)=>{
    log("Request event: " + cnt + " URL: " + req.url);
    res.write("Hello guys, welcome to event loop classes");
    res.end();
    cnt++;
})

server.listen(5000, () =>{
    console.log('Server is running on PORT:5000');    
})