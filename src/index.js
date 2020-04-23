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


//Routes

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res, next) => {

})


//Static Files

app.use(express.static(path.join(__dirname, '/public')))

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});