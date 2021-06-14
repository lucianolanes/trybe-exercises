const sum = require('./exercicio1');

describe ('Testando a função de soma', () => {
  test('Soma 4 + 5', () => {
    expect(sum(4, 5)).toBe(9);
  })

  test('Soma 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  test('Somando numero e string', () => {
    expect(() => {
      sum(4,'5').toThrow()});
  })

  test('Somando numero e string e checkando messagem de erro', () => {
    expect(() => {
      sum(4,'5').toThrow(/parameters must be numbers/)});
  })
})

// describe('Testando a Função MyRemove', () => {
//   test('Verifique se a chamada retorna o array esperado', () => {
//     expect(myRemove([1, 2, 3, 4], 3).toEqual([1, 2, 4]));
//   })
// })

