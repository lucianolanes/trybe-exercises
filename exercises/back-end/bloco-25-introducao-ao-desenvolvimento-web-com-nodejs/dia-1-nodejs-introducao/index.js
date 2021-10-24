const readLine = require('readline-sync');

const main = () => {
  const input = readLine.questionInt('Scripts disponíveis: 1 - Cálculo do IMC; 2 - Cálculo da velocidade média; 3 - Sorterio. Insira o número do script correspondente: ');

  if (input === 1) {
    return require('./imc.js');
  }

  if (input === 2) {
    return require('./velocidade.js');
  }
  
  if (input === 3) {
    return require('./sorteio');
  }

  return console.log('Valor incorreto');
}

main();