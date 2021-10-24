const readline = require('readline-sync');

const main = () => {
  const distancia = readline.questionInt('Qual a distância ?');
  const tempo = readline.questionInt('Qual o tempo ?');
  const result = (distancia / tempo).toFixed(2);

  return console.log(`A velocidade média é de ${result} m/s`);
}

main();