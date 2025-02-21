const http = require('http')

const server = http.createServer((req, res)=>{
    res.write("Hello guys, welcome to event loop classes");
    res.end();
})

server.listen(5000, () =>{
    console.log('Server is running on PORT:5000');    
})