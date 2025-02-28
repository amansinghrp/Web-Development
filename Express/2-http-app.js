const http = require('http');
const {readFileSync} = require('fs');
const homePage = readFileSync('./1-http-app/index.html');
const homeStyle = readFileSync('./1-http-app/styles.css');
const logo = readFileSync('./1-http-app/logo.svg');
const logic = readFileSync('./1-http-app/browser-app.js');

const server = http.createServer((req, res) =>{
    let url = req.url;

    if(url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(homePage);
        res.end();
    }
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(homeStyle);
        res.end();
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/javascript'})
        res.write(logic);
        res.end()
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type' : 'image/svg+xml'})
        res.write(logo);
        res.end();
    }
    else{
        res.writeHead(400, {'content-type': 'text/html'});
        res.write('<h1>400:Page not found</h1>')
        res.end()
    }
})

server.listen(5000);