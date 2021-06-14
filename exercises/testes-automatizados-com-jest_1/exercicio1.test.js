const sum = require('./exercicio1');

describe ('Testando a função de soma', () => {
  test('Soma 4 + 5', () => {
    expect(sum(4, 5)).toBe(9);
  })

  test('Soma 0 + 0', () => {
    expect(sum(0,0)).toBe(0);
  })

  test('Somando numero e string', () => {
    expect(() => {
      sum(4,'5').toThrow(/parameters must be numbers/)});
  })
})

// ------------
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

