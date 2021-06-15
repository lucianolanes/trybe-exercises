const { users, findUserById, getUserName } = require('./exercicio2');

describe('Testando simulação de busca de usuários em um banco de dados', () => {
  it('Testando quando a id retorna', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).toEqual('Mark')
    })
  })

  it('Testando quando a id não existe', () => {
    expect.assertions(1);
    return getUserName(9).catch((error) => {
      expect(error).toEqual({ error: 'User with 9 not found.' })
    })
  })
})
