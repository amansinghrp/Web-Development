// const { log } = require('console');
// const EventEmitter = require('events');

// const customEventEmitter = new EventEmitter();

// customEventEmitter.on('response', ()=>{
//     log(`data Received`);
// })

// customEventEmitter.emit('response');


//using the event Emitter API for http module example
const http = require('http')
const server = http.createServer();

server.on('request', (req, res)=>{
    res.end('Welcome');
})

server.listen(5000);