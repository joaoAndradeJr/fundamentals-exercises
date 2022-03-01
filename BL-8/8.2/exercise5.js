// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const books = require('./books');

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2001);
}

console.log(everyoneWasBornOnSecXX());
