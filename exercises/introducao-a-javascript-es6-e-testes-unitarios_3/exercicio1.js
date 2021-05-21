const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const soma9 = sum(4,5);
assert.strictEqual(soma9, 9, 'A soma de 4 + 5 tem que ser 9!');

const soma0 = sum(0,0);
assert.strictEqual(soma0, 0);

// const somaString = sum(4,'5');
// assert.strictEqual(somaString,9);


