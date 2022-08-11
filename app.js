const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

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

app.get('/on-trobarnos', (req, res) => {
    res.render('layout', { page: 'on-trobarnos'});
});

app.get('/on-mes-trobarnos', (req, res) => {
    res.render('layout', { page: 'on-mes-trobarnos'});
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})