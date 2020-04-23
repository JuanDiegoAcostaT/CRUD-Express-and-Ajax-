const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();


//Data Base Simulation
const products = [
    {
        id : 1,
        name : 'Laptop'
    },
    {
        id : 2 ,
        name : 'microphone'
    },
    {
        id : 3,
        name : 'Mouse'
    }
]

//Settings

app.set('port', process.env.PORT || 3000);


//Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());


//Routes

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res, next) => {
    const { name } = req.body;
    products.push({
        id : products.length + 1,
        name : name,
    })
    res.json('Succesfully Created')
})

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    products.forEach((product, i) => {
        if(product.id == id){
            product.name = name;
        }
    })

    res.json('Succesfully Updated')


    })


    app.delete('/products/:id', (req, res) => {
        const { id } = req.params;

        products.forEach((product, i) => {
            if(product.id == id){
                products.splice(i, 1);
            }
        })

    res.json('Succesfully Deleted')

    })
//Static Files

app.use(express.static(path.join(__dirname, '/public')))

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});