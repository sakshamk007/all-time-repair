var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/home');
});

app.get('/services', function(req, res) {
    res.render('pages/services');
});

app.get('/services/:service', (req, res) => {
    const service = req.params.service;
    res.render(`services/${service}`);
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(8080);
console.log(`http://localhost:8080`);
