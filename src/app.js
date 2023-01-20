const express = require ('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importing rutes

const productRoutes =require('./routes/products.js');


//settings 
app.set('port',process.env.PORT || 8000);
app.set('view engine','ejs');  //mototr de plantillas
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'nodecrud'
},'single'));
//routes 'URLS'
app.use('/',productRoutes); 

//static files
app.use(express.static(path.join(__dirname,'public')));


//starting server
app.listen(8080, () =>{
console.log('SUCCEFULY SERVER ON PORT ',8000);
});