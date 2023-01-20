 const express = require('express');
 const router = express.Router();

//const products = require('../database.js')

 router.route('/')
 .get((req, res ) => {
     res.send('metodo de get')
 })
 .post((req, res ) => {

 });
 

 module.exports = router;