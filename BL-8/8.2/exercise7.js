// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const books = require('./books');

const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());
