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
