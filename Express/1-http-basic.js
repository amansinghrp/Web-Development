const http = require('http');

const server = http.createServer((req, res) =>{
    let url = req.url;

    if(url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1>Home page</h1>');
        res.end();
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h2>About Page</h2>')
        res.end();
    }
    else{
        res.writeHead(400, {'content-type':'text/html'});
        res.write('<h1>Page not Found!</h1>');
        res.end();
    }
})

server.listen(5000);