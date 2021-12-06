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
const sinon = require('sinon');

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

  it('Verifica que o retorno é uma string', () => {
    const string = isNumber(3);

    expect(string).to.be.a('string');
  });
});

// Exercício 2 : Implemente a função apresentada no exercício 1,
// garantindo que ela irá passar em todos os testes que você escreveu.
// 1. Adicione o cenário em seu arquivo de testes, passando um valor de
// tipo diferente a Number para a função;
// 2. Adicione uma asserção para esperar que o valor retornado para esse
// caso seja igual uma string "o valor deve ser um número";
describe('Verifica retorno quando valor for:', () => {
  it('diferente de typeof number', () => {
    const notNumber = isNumber('notNumber');
  
    expect(notNumber).to.be.equal('o valor deve ser um número');
  });
});

// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
//  - Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
//  - Após concluir a escrita do arquivo ela deverá retornar um ok .
// 1. Descreva todos os cenários de teste utilizando describes ;
// 2. Descreva todos os testes que serão feitos utilizando its ;
// 3. Crie as asserções validando se o retorno da função possui o valor e tipo esperado

const RETORNO_ESPERADO = "ok";
const fs = require('fs');

const writeInfo = require('./writeInfo');

sinon.stub(fs, 'writeFile').returns(RETORNO_ESPERADO);

describe('verifica retorno da função despois de escrever conteúdo', () => {
  it('o retorno é uma string', () => {
    const answer = writeInfo('./meu-texto', 'Meu Texto!');

    expect(answer).to.be.equals('ok');
  });
});
