const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json')

const app = express()
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
    extname: 'hbs'
    }));

app.use(express.static('public'))


  app.listen(4444, () => {
      console.log('hello');
  })

  app.get('/', function (req, res) {
    res.render('home', {cssFileName: 'home', pageName: "Главная"});
    // res.send('<h1>hello /</h1>');
    // console.log(req);
  })

  app.get('/about', function (req, res) {
    res.render('about', {cssFileName: 'products', pageName: "О нас"});
  })

  app.get('/products', function (req, res) {
    res.render('products', {products, cssFileName: 'products', pageName: "Товары"});
  })

  app.get('/product/:productId', function(req,res) {
    const product = products.find(p => p.id === req.params.productId);
    console.log(product);
    res.render('product', {product})
  })
