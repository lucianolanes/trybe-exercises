const readline = require('readline-sync');

const main = () => {
  const peso = readline.questionInt('Qual o seu peso? ');
  const altura = readline.questionFloat('Qual a sua altura? ');

  const result = (altura * peso) / 2;
  return console.log(result);
}

main();
