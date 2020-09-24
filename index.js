const express = require('express');
const app = express();

// Static
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', {title: 'Book List - Main'});
})

// Server
app.listen(3000, () => {
    console.log('Server on.');
});