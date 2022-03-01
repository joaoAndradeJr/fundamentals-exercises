/*
  Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
  Dica: cada inicial termina com um ponto.

  const expectedResult = 'O Senhor dos Anéis';
*/

const books = require('./books');

function authorWith3DotsOnName() {
  const dot = '.';
  const bookName = books
    .filter((book) => {
      const { name } = book.author;
      if (name[1] === dot && name[4] === dot && name[7] === dot) return book;
    });

  return bookName[0].name;
}

console.log(authorWith3DotsOnName());

/*
  function authorWith3DotsOnName() {
    return books.find((book) => (
      book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
    )).name;
  }
*/
