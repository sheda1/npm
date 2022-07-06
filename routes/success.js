const path = require('path');
const express = require('express');
//const rootDir = require('../util/path.js');
const router = express.Router();

router.use('/success',(req,res,next) => {
    
    res.send('<h1>Form successfully filled</h1>')
   // res.sendFile(path.join(rootDir,'views','shop.html'));
});
module.exports = router;