const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

app.get('/', (req, res)=>{
    // res.status(200).sendFile(path.resolve(__dirname, './1-http-app/index.html'));
    //OR
    //add index.html also to thepublic folder as it is also a static content
    //OR
    //Server side rendering
})

app.all('*', (req, res)=>{
    res.status(404).send("<h1>Page Not Found!!</h1>");
})

app.listen(5000, ()=>{
    console.log('server is Runnig on PORT 5000...');
    
})