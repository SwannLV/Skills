var app = require('express').createServer();
var port = process.env.PORT || 3000;
app.listen(port);

app.get('/', function(req, res){res.sendfile(__dirname + '/index.html');}); 
app.get('/d3/d3.js', function(req, res){res.sendfile(__dirname + '/d3/d3.js');});
app.get('/d3/d3.geom.js', function(req, res){res.sendfile(__dirname + '/d3/d3.geom.js');});
app.get('/style.css', function(req, res){res.sendfile(__dirname + '/style.css');});
app.get('/d3/d3.v2.js', function(req, res){res.sendfile(__dirname + '/d3/d3.v2.js');});
app.get('/d3/d3.layout.js', function(req, res){res.sendfile(__dirname + '/d3/d3.layout.js');});