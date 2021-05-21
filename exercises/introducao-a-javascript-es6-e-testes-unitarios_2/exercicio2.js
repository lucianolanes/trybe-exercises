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

const adicionarPropriedade = (lesson, key, value) => lesson[key] = value;

const listarKeys = (lesson) => Object.keys(lesson);

const tamanhoObjeto = (lesson) => Object.keys(lesson).length;

const listarValues = (lesson) => Object.values(lesson);

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});

const totalEstudantes = () => {
  const estudantesLesson1 = allLessons.lesson1.numeroEstudantes;
  const estudantesLesson2 = allLessons.lesson2.numeroEstudantes;
  const estudantesLesson3 = allLessons.lesson3.numeroEstudantes;

  return estudantesLesson1 + estudantesLesson2 + estudantesLesson3;
}

// const getNumberOfStudents = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     total += obj[array[index]].numeroEstudantes;
//   }
//   return total;
// };

// console.log(getNumberOfStudents(allLessons));

const valorDaChave = (lesson, key) => Object.values(lesson)[key];

