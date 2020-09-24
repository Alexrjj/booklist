const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');

// View Engine
app.set('view engine', 'ejs');

// Static
express.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {title: 'Book List - Main'});
})

// Server
app.listen(3000, () => {
    console.log('Server on.');
});