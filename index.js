const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const indexroutes = require('./routes/indexroutes.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  req.timestamp = new Date().toString()
  next()
})

app.use('/', indexroutes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.listen(5000);
console.log('Server running on localhost:5000...')