const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/pages/home.html'));
});

app.get('/services', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/pages/services.html'));
});

app.get('/services/:service', (req, res) => {
    const service = req.params.service;
    res.sendFile(path.join(__dirname, `views/services/${service}.html`));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/pages/about.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/pages/contact.html'));
});

app.listen(8080);
console.log(`http://localhost:8080`);
