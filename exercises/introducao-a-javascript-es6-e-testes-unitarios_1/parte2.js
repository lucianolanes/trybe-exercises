// 1 - Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (number) => {
  let multiply = 1;

  for (let index = 1; index <= number; index += 1){
    multiply *= index;
   }
   return multiply;
}

console.log(fatorial(7));

