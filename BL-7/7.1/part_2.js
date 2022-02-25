/*
  Parte II
  Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
  Crie uma função que receba um número e retorne seu fatorial.
  Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
  Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.
*/

const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1);

console.log(factorial(4));

/*
  Crie uma função que receba uma frase e retorne qual a maior palavra.
  Exemplo:
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
*/

const longestWord = (sentence) => {
  let longest = '';
  const words = sentence.split(' ');
  words.forEach(word => {
    if (word.length > longest.length) longest = word;
  });
  return longest;
};

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

/*
  Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
  Exemplo:
  String determinada: "Tryber x aqui!"
  Parâmetro: "Bebeto"
  Retorno: "Tryber Bebeto aqui!"
*/

const skills = ['HTML', 'Javascript', 'React', 'mongoDB', 'Redux'];

const determinatedString = 'Tryber x aqui!';

const replaceX = (str) => determinatedString.replace('x', str);

/*
  Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
  Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
  JavaScript;
  HTML; ... #goTrybe".
*/

function buildSkillsPhrase (paramOne) {

  let result = `${replaceX(paramOne)}

  Minhas cinco principais habilidades são:`;

  skills.forEach((skill) =>
  result = `${result}

  - ${skill}`);

  result = `
  ${result}

  #goTrybe
  `;

  return result;
}

console.log(buildSkillsPhrase('João'));
