const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/qui-som', (req, res) => {
    res.render('qui-som');
});

app.get('/pans', (req, res) => {
    res.render('pans');
});

app.get('/panologia', (req, res) => {
    res.render('panologia');
});

app.get('/disponibilitat', (req, res) => {
    res.render('disponibilitat');
});

app.get('/cafeteria', (req, res) => {
    res.render('cafeteria');
});

app.get('/on-som', (req, res) => {
    res.render('on-som');
});



app.listen(port, () => {
    console.log(`Running on port ${port}`);
})