// Exercício 1 : Estruture os testes utilizando mocha e chai para um
// função que irá dizer se um número é "positivo", "negativo" ou "neutro":
//  - Essa função irá receber um número como parâmetro e retornar uma
// string como resposta;
//  - Quando o número passado for maior que 0 deverá retornar
// "positivo", quando for menor que 0 deverá retornar "negativo"
// e quando igual a 0 deverá retornar "neutro";

// 1. Descreva todos os cenário de teste utilizando describes ;
// 2. Descreva todos os testes que serão feitos utilizando its ;
// 3. Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

const { expect } = require('chai');

const isNumber = require("./isNumber");

describe('verifica o retorno da função quando o número é:', () => {
  it('maior do que zero', () => {
    const positivo = isNumber(5);

    expect(positivo).to.be.equal('positivo');
  });

  it('menor do que zero', () => {
    const negativo = isNumber(-5);

    expect(negativo).to.be.equal('negativo');
  });

  it('maior do que zero', () => {
    const neutro = isNumber(0);

    expect(neutro).to.be.equal('neutro');
  });
});
