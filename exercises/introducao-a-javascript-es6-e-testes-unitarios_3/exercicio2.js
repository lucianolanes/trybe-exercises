const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
const teste1 = myRemove([1,2,3,4], 3);
assert.deepStrictEqual(teste1, [1,2,4]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(teste1, [1,2,3,4]);

// Verifique se o array passado por parâmetro não sofreu alterações
const arrayParametro = [5,6,7,8];
myRemove(arrayParametro, 5);
assert.deepStrictEqual(arrayParametro, [5,6,7,8]);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
const teste2 = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(teste2, [1, 2, 3, 4]);




