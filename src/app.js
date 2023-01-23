const express = require ('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importing rutes

const customerRoutes = require('./routes/customer.js');


//settings 
app.set('port',process.env.PORT || 4000);
app.set('view engine','ejs');  //mototr de plantillas
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user:'root',
    password:'',
    port: 3306,
    database:'nodecrud'
},'single'));

app.use(express.urlencoded({extended:false}));

//routes 'URLS'
app.use('/',customerRoutes); 

//static files
app.use(express.static(path.join(__dirname,'public')));


//starting server
app.listen(app.get('port'), () =>{
try {
    console.log('SUCCEFULY SERVER ON PORT ',4000);
} catch (error) {
    console.log('UNABLE TO THE SERVER');
}
});

