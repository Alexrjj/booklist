const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View Engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {title: 'Book List - Main'});
})

// Server
app.listen(3000, () => {
    console.log('Server on.');
});