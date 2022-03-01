/*
  Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
  Dica: use a função find.
*/

const books = require('./books');

function authorBornIn1947() {
  const { author } = books.find((book) => book.author.birthYear === 1947);
  return author.name;
}

console.log(authorBornIn1947());
