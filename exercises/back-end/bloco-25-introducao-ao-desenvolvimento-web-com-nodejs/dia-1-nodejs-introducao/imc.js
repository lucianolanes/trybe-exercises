const readline = require('readline-sync');

const main = () => {
  const peso = readline.questionInt('Qual o seu peso? ');
  const altura = readline.questionFloat('Qual a sua altura? ', 2);
  const result = peso / (altura * altura);
  if (result < 18.5) {
    return console.log('Abaixo do Peso (magreza)');
  }
  
  if (result >= 18.5 && result < 25) {
    return console.log('Peso normal');
  }
  
  if (result >= 25 && result < 30) {
    return console.log('Acima do peso (sobrepeso)');
  }

  if (result >= 30 && result < 35) {
    return console.log('Obesidade grau I');
  }

  if (result >= 35 && result < 40) {
    return console.log('Obesidade grau II');
  }

    return console.log('Obesidade grau III e IV');
}

main();
