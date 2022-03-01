/*
  Retorne o nome do livro de menor nome.
  Dica: use a função forEach.
*/

const books = require('./books');

function smallerName() {
  let nameBook = books[0].name;

  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    } 
  });

  return nameBook;
}

console.log(smallerName());
