/*
  Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

  const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
*/

const books = require('./books');

function fantasyOrScienceFictionAuthors() {
  const genders = ['Fantasia', 'Ficção Científica'];
  const authors = books
    .filter((book) => genders.includes(book.genre))
    .map((book) => book.author.name)
    .sort();
  
  return authors;
}

console.log(fantasyOrScienceFictionAuthors());
