const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');
const connection = require('./database/connection');
const Book = require('./books/Books');

// DB Connection
connection.authenticate().then(() => {
    console.log('DB Ok.');
}).catch((err) => {
    console.log(err);
});

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View Engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {title: 'BookList - Main'});
});

app.post('/save', (req, res) => {
    let title = req.body.title;
    let author = req.body.author;
    let isbn = req.body.isbn;


});

// Server
app.listen(3000, () => {
    console.log('Server on.');
});