const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write("Hello, Welcome to my app");
        res.end();    
    }
    else if(req.url === '/about'){
        res.write("I am a btech cse 3rd sem student");
        res.end();
    }
    else if(req.url === '/portfolio'){
        res.end("Will be made availabe soon");
    }
    else{
        res.end(`
            <h1>Oops</h1>
            <p>We can't seem to find that page for you at the moment</p>
            <a href = "/">back to home</a>    
        `)
    }
});

server.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});
