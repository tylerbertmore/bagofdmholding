const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
require('dotenv').config();
const PORT = 8000;

// VIEW ENGINE
app.set('view engine', 'ejs');


// MIDDLEWARE
app.use(express.static(__dirname + '/public'));
// const ctrl = require('./controllers');
// const db = require('./models');
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// MORGAN REPLACEMENT
app.use((req, res, next) => {
  const method = req.method;
  const path = req.url;
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${method} ${path} ${timestamp}`);
  next(); // Allow the request to move on to the next middleware in the chain
});

// ROUTES

// Root
app.get('/', (req, res) => {
  res.render('index');
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))