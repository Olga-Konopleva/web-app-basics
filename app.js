const express = require('express');
const exhbs = require('express-handlebars');

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
    res.send('<h1>hello /</h1>');
    // console.log(req);
  })

  app.get('/about', function (req, res) {
    res.send('hello about')
  })
