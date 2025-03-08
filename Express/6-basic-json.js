const express = require('express')
const app = express();
const {products} = require('./data.js')

app.get('/', (req, res)=>{
    res.json(products);
})

app.all('*', (req, res)=>{
    res.status(404).send("<h1>Page Not Found!!</h1>")
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})