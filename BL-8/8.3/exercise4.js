/*
  Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
  Dica: use as funções filter e sort

  const expectedResult = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
*/

const books = require('./books');

const oldBook = (release) => 2022 - release;

function oldBooksOrdered() {
  const oldBooks = books.filter((book) => {
    if (oldBook(book.releaseYear) > 60) return book;
  });

  oldBooks.sort(function (a, b) {
    if (a.releaseYear > b.releaseYear) {
      return 1;
    }
    if (a.releaseYear < b.releaseYear) {
      return -1;
    }
    return 0;
  });

  return oldBooks;
}

console.log(oldBooksOrdered());
