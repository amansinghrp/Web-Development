const express = require('express')
const app = express();
const {products} = require('./data.js')

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1><br><a href = "/api/products">Products</a>');
})
app.get('/api/products', (req, res) =>{
    const newProduct = products.map((product) =>{
        const {id, name, image} = product
        return {id, name, image};
    })

    res.json(newProduct);
})

//setting up the route params
app.get('/api/products/:productID', (req, res) =>{
    console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find((product) =>{
        return product.id === Number(productID)
    })
    // console.log(singleProduct);
    if(!singleProduct){
        res.status(404).send("<h1>OOPS!!Product not found</h1>")
    }
    res.json(singleProduct); 
})

//a little nested request parameters
app.get('/api/products/:productId/reviews/:reviewID', (req, res) =>{
    console.log(req.params);
    res.send("OKOKOK");    
})


app.all('*', (req, res)=>{
    res.status(404).send("<h1>Page Not Found!!</h1>")
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})