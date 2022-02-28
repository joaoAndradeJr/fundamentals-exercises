const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*
  Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/

const addShift = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

console.log(addShift(lesson2, 'turno', 'noite'));

const showKeys = (obj) => Object.keys(obj);

console.log(showKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

const objSize = obj => Object.keys(obj).length;

console.log(objSize(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) => Object.values(obj);

console.log(listValues(lesson1));

/*
  Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

  console.log(allLessons);

  {
    lesson1:
    { materia: 'Matemática',
      numeroEstudantes: 20,
      professor: 'Maria Clara',
      turno: 'manhã' },
    lesson2:
    { materia: 'História',
      numeroEstudantes: 20,
      professor: 'Carlos',
      turno: 'noite' },
    lesson3:
    { materia: 'Matemática',
      numeroEstudantes: 10,
      professor: 'Maria Clara',
      turno: 'noite' }
  };

*/

const assignObj = () => {
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  return allLessons;
};

console.log(assignObj());

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumStudents = () => {
  const allLessons = assignObj();
  let total = 0;
  Object.values(allLessons).forEach((lesson) => total += lesson.numeroEstudantes);
  return total;
};

console.log(sumStudents());

/*
  7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
  console.log(getValueByNumber(lesson1, 0));
  Output: 'Matématica'
*/

const getValueByNumber = (lesson, position) => {
  return Object.values(lesson)[position];
};

console.log(getValueByNumber(lesson1, 0));

/*
  8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

  console.log(verifyPair(lesson3, 'turno', 'noite'));
  Output: true,
  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
  Output: false
*/

const checkPair = (obj, key, value) => {
  const array = Object.entries(obj);
  let isPair = false;
  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) {
      isPair = true;
    }
  }
  return isPair;
};

console.log(checkPair(lesson2, 'professor', 'Carlos'));

module.exports = assignObj;
