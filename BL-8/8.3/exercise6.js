/*
  Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

  const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
*/

const books = require('./books');

const getAge = (release) => 2022 - release;

function oldBooks() {
  const oldBook = books
    .filter((book) => {
      const age = getAge(book.releaseYear);
      if (age > 60) return book;
    })
    .map((book) => book.name);

  return oldBook;
}

console.log(oldBooks());
