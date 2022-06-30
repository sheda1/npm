const http= require('http');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
app.use(bodyParser.urlencoded({extended : false}));


app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(3000);

// admin.js
const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next) => {
  
    res.send('<form action="/admin/add-product" method="post"><input type = "text" name = "title" ><button type ="submit">Add product</button></form>')
});

router.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

//shop.js
const express = require('express');
const router = express.Router();

router.use('/',(req,res,next) => {
    
    res.send('<h1>Hello from express</h1>')
});
module.exports = router;
