const { it, expect } = require('@jest/globals');
const math = require('./math');

describe('Testando Mocks', () => {
  it('Função subtrair foi chamada', () => {
    subtrair = jest.fn();
    subtrair();
    expect(subtrair).toHaveBeenCalled();
  })

  it('Multiplicar com retorno 10', () => {
    multiplicar = jest.fn()
    .mockReturnValue(10);
    multiplicar();
    expect(multiplicar).toHaveBeenCalled;
    expect(multiplicar()).toBe(10);
  })

  it('Função Soma', () => {
    const mockSomar = jest.spyOn(math, 'somar');
    mockSomar.mockResolvedValue(3);
    mockSomar(1, 2)

    expect(mockSomar).toHaveBeenCalled;
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);

  })
})