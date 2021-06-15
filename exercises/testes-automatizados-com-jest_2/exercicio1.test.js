const uppercase = require('./exercicio1');

describe('Testando Jest com callback', () => {
  it('Transforma todas as letras em maíusculas', (done) => {
    uppercase('testando', (str) => {
      expect(str).toBe('TESTANDO');
      done();
    });
  })
})