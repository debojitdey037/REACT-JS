const express = require("express");
const app = express();
const { products } = require('./data')
const PORT = 3000;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res)=>{
     res.send("Hello World");

})

app.get('/api',(req,res)=>{
    res.send("Api is working");
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})