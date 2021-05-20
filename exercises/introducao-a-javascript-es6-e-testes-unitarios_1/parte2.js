// 1 - Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (number) => {
  let multiply = 1;

  for (let index = 1; index <= number; index += 1){
    multiply *= index;
   }
   return multiply;
}

console.log(fatorial(7));

// // bônus: operador ternário
// const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1
// console.log(fatorial(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (frase) => {
  const arrayPalavras = frase.split (' ');
  let contagem = arrayPalavras[0];

  for (let index = 1; index < arrayPalavras.length; index += 1){
    if (arrayPalavras[index].length > contagem.length){
      contagem = arrayPalavras[index];
    }
  }
  return contagem;
}

console.log(maiorPalavra('Hello my Friend'));