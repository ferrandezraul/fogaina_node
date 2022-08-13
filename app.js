const pans = require('./pans.js');

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('layout', { page: 'home', data: {} });
});

app.get('/qui-som', (req, res) => {
    res.render('layout', { page: 'qui-som', data: {} });
});

app.get('/pans', (req, res) => {
    res.render('layout', { page: 'pans', data: pans});
});

app.get('/panologia', (req, res) => {
    res.render('layout', { page: 'panologia', data: {} });
});

app.get('/disponibilitat', (req, res) => {
    res.render('layout', { page: 'disponibilitat', data: {} });
});

app.get('/cafeteria', (req, res) => {
    res.render('layout', { page: 'cafeteria', data: {} });
});

app.get('/on-trobarnos', (req, res) => {
    res.render('layout', { page: 'on-trobarnos', data: {} });
});

app.get('/on-mes-trobarnos', (req, res) => {
    res.render('layout', { page: 'on-mes-trobarnos', data: {}});
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})