const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');
const router = express.Router();

router.use('/shop',(req,res,next) => {
    
    //res.send('<h1>Hello from express</h1>')
    res.sendFile(path.join(rootDir,'views','shop.html'));
});
module.exports = router;