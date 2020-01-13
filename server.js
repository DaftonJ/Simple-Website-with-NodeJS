const express = require('express');
const books = require('./books.json');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
      title: 'Nasze Książki',
      books: books.profiles
    });
  });

  app.get('/profile', (req, res) => {
    const book = books.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${book.name}`,
      book,
    });
  });

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
  