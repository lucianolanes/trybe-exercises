const checkAnswers = (arrayA, arrayB) => {
  let counter = 0;
  for (let index = 0; index < arrayB.length; index +=1) {
    if (arrayB[index] !== 'N.A') {
      if (arrayB[index] === arrayA[index]) {
        counter += 1;
      } else {
        counter -= 0.5;
      }
    }
  }
  return counter;
}

const corrigirTeste = (gabarito, respostasEstudante, callback) => callback(gabarito, respostasEstudante);

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corrigirTeste(rightAnswers, studentAnswers, checkAnswers));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const repeat = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} corretas`;
// };

