
const morgan = require('morgan'); 
const bodyParser = require('body-parser')



const express = require('express');
const app = express();

const productRoutes = require('./src/routes/products');
//settings
app.use('json spaces', 4);


//middleware

app.use(morgan('dev'));
app.use(bodyParser.json());//here convert json
app.use(bodyParser.urlencoded({extended:false})); //

//routes

app.use('/products',productRoutes)

//star server
app.listen(4000, () => {
   console.log('listening server on port ',4000);
});