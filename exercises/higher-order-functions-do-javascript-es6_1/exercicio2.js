const comparaNumbs = (num1, num2) => {
  if (num1 === num2){
    return true;
  } else {
    return false;
  }
}

const sorteio = (aposta) => {
  const randomNumb = Math.round(Math.random() * 5);
  let resultado = comparaNumbs(aposta, randomNumb);

  if (resultado === true) {
    return "Você Ganhou!"
  } else {
    return "Tente Novamente"
  }
}

console.log(sorteio(5));