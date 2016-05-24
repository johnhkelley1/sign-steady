var express = require('express')
  , http    = require('http')

var app = express()

app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public');

app.get('/', function (req, res) {
  res.redirect('index.html')
})

http.createServer(app).listen(3010)

