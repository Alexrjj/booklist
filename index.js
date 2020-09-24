const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');
const connection = require('./database/connection');
const Book = require('./books/Books');
const slugify = require('slugify');

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

// Index Route - List books
app.get('/', (req, res) => {
    Book.findAll().then(books => {
        res.render('index', {title: 'BookList - Main', books: books});
    })

});

// Save book
app.post('/save', (req, res) => {
    let title = req.body.title;
    let author = req.body.author;
    let isbn = req.body.isbn;
    let date = new Date();

    if(title !== undefined) {
        Book.create({
            title: title,
            author: author,
            isbn: isbn,
            regdate: date,
            slug: slugify(title, { lower: true }),
        }).then(() => {
            res.redirect('/');
        });
    } else {
        alert('Verifique os campos!');
        res.redirect('/');
    }
});

// Delete book
app.post('/delete', (req, res) => {
   let id = req.body.id;

   if (id !== undefined) {
       if (!isNaN(id)) {
           Book.destroy({
               where: {
                   id: id
               }
           }).then(() => {
               res.redirect('/');
           });
       } else {
           res.redirect('/');
       }
   } else {
       res.redirect('/');
   }
});

// Server
app.listen(3000, () => {
    console.log('Server on.');
});