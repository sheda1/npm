const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');
const router = express.Router();

router.get('/contact-us',(req,res,next) => {
    
    //res.send('<h1>Hello from express</h1>')
    res.sendFile(path.join(rootDir,'views','contact.html'));
});

router.post('/contact-us',(req,res,next) => {
   
    res.redirect('/success');
});

module.exports = router;