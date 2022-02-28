/*
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
*/

const generateEmail = (name) => {
  const formatedName = name.replace(' ', '_').toLowerCase();
  return `${formatedName}@trybe.com`;
};

const newEmployees = (generateEmail) => {
  const employees = {
    id1: generateEmail('Pedro Guerra'),
    id2: generateEmail('Luiza Drumond'),
    id3: generateEmail('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(generateEmail));

/*
  2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const checkNumber = (number, luckNumber) => (
  number === luckNumber ? 'Parabéns você ganhou' : 'Tente novamente'
);

const shuffleNumber = (number) => {
  const luckNumber = parseInt(Math.random() * (6 - 1) + 1);
  return checkNumber(number, luckNumber);
};

console.log(shuffleNumber(3));

/*
  3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
  Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
  
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (right_answer, answer) => {
  if (answer === 'N.A') return 0;
  if (answer !== right_answer) return -0.5;
  return 1;
}

const getResult = (rigth_answers, answers, check) => {
  let totalPoints = 0;
  rigth_answers.forEach((element, index) => {
    totalPoints += check(element, answers[index]);
  });
  return totalPoints;
};

console.log(getResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
