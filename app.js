const express = require('express');
const app = express();
const path = require('path');
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products"> all products </a>');
})

// app.get('/api/products', (req, res) => {
//     res.json(products)
// })

// return specifc data e.g here, we arent returning description
app.get('/api/products', (req, res) => {
    const newProducts = products.map( (product) => {
        const {id, name, image} = product;
        return {id, name, image}
    } )

    res.json(newProducts)
})

// single product
app.get('/api/products/:prodId', (req, res) => {
    const { prodId } = req.params;
    const singleProduct = products.find( 
        (product) => product.id === Number(prodId)
    )
    if(!singleProduct){
        return res.status(404).send('Page Not Found')
    }

    return res.json(singleProduct)
})

// setup assets and middleware
app.use(express.static('./public'))

app.get('/api/products', (req,res) => {

})

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
})

app.listen(5001, () => {
    console.log('listening on port 5001...');
})