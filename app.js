const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('layout', { 
        page: 'home'
    });
});

app.get('/qui-som', (req, res) => {
    res.render('layout', { page: 'qui-som'});
});

app.get('/pans', (req, res) => {
    res.render('layout', { page: 'pans'});
});

app.get('/panologia', (req, res) => {
    res.render('layout', { page: 'panologia'});
});

app.get('/disponibilitat', (req, res) => {
    res.render('layout', { page: 'disponibilitat'});
});

app.get('/cafeteria', (req, res) => {
    res.render('layout', { page: 'cafeteria'});
});

app.get('/on-som', (req, res) => {
    res.render('layout', { page: 'on-som'});
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})