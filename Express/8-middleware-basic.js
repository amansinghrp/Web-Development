// const express = require('express')
// const app = express()
// const logger = require('./logger.js')

// // app.get('/', logger,(req, res)=>{
// //     res.send("Home");
// // })

// // app.get('/about', logger,(req, res)=>{
// //     res.send("About")
// // })

// // app.all("*", logger,(req,res)=>{
// //     res.send("Sorry mil nahi rha !!!")
// // })

// app.use('/aman',logger)
// app.get('/',(req, res)=>{
//     res.send("Home");
// })

// app.get('/about',(req, res)=>{
//     res.send("About")
// })

// app.get('/aman/resume',(req, res)=>{
//     res.send("resume")
// })

// app.get('/aman/image',(req, res)=>{
//     res.send("iamge")
// })

// app.all('*',(req,res)=>{
//     res.send("Sorry mil nahi rha !!!")
// })



// app.listen(5000, ()=>{
//     console.log("Server runnign on port 5000.....");
// })



//---------------Mupltiple middleware ------- 
const express = require('express')
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize.js')
// app.get('/', logger,(req, res)=>{
//     res.send("Home");
// })

// app.get('/about', logger,(req, res)=>{
//     res.send("About")
// })

// app.all("*", logger,(req,res)=>{
//     res.send("Sorry mil nahi rha !!!")
// })

// app.use('/aman',logger)

app.use([authorize, logger])
app.get('/',(req, res)=>{
    res.send("Home");
})

app.get('/about',(req, res)=>{
    res.send("About")
})

app.get('/aman/resume',(req, res)=>{
    console.log(req.user);
    res.send("resume")
})

app.get('/aman/image',(req, res)=>{
    res.send("iamge")
})

app.all('*',(req,res)=>{
    res.send("Sorry mil nahi rha !!!")
})



app.listen(5000, ()=>{
    console.log("Server runnign on port 5000.....");
})