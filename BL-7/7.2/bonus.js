const assignObj = require('./part_2');

/*
  Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
*/

const studentsAtMathLesson = () => {
  const allLessons = Object.values(assignObj());
  let students = 0;

  allLessons.forEach((lesson) => {
    if (lesson.materia === 'Matemática') {
      students += lesson.numeroEstudantes;
    }
  });
  return students;
};

console.log(studentsAtMathLesson());

/*
  Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
*/

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}

console.log(createReport(assignObj(), 'Maria Clara')); 
