var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(8080);
console.log(`http://localhost:8080`);
