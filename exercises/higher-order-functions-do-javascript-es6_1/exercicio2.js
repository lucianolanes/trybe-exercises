const comparaNumbs = (num1, num2) => num1 === num2;

const sorteio = (aposta) => {
  const randomNumb = Math.ceil((Math.random() * 5));
  let resultado = comparaNumbs(aposta, randomNumb);

  if (resultado === true) {
    return "Você Ganhou!"
  } else {
    return "Tente Novamente"
  }
  // ou  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(sorteio(5));
