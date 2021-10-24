const readline = require('readline-sync');

const main = () => {
  const input = readline.questionInt('Tente adivinhar o número sorteado! Insira o valor ');
  const result = Math.floor(Math.random() * 11);
  
  if (input === result) {
  return console.log(`Parabéns, o número está correto: ${result}`);
  }
  
  return console.log(`Opa, não foi dessa vez. O número era ${result}`);
}

main();