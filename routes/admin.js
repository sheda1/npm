const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');
const router = express.Router();

router.get('/add-product',(req,res,next) => {
  
    //res.send('<form action="/add-product" method="post"><input type = "text" name = "title" ><button type ="submit">Add product</button></form>')
    console.log('hie');
    res.sendFile(path.join(rootDir,'views','add.html'));
   // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post('/add-product',(req,res,next) => {
    console.log("post");
    console.log(req.body.title);
    res.redirect('/shop');
});

module.exports = router;