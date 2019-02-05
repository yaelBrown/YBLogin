var express  = require('express');
var app      = express();
var jwt      = require('jsonwebtoken');
var port     = 5001;

// use current directory
app.use(express.static(__dirname + '/'));

// route to index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// setting up jwt api
app.get('/api', (req, res) => {
  res.json({
    message: "Welcome to the api"
  });
});

// launch 
app.listen(port);
console.log('The magic happens on port ' + port);