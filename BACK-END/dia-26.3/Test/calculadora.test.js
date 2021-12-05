const { expect } = require('chai');
const {
  sum,
  subtract,
  multiply,
  divide,
} = require('../calculadora.js');

describe('verifica a função de soma', () => {
  it('verifica retorno de num1 = 10 e num2 = 20', () => {
    const answer = sum(10, 20);

    expect(answer).to.be.equals(30);
  });

  it('verifica retorno de num1 = 6 e num2 = 17', () => {
    const answer = sum(6, 17);

    expect(answer).to.be.equals(23);
  });

  it('verifica retorno de num1 = 16 e num2 = 114', () => {
    const answer = sum(16, 114);

    expect(answer).to.be.equals(130);
  });
});

describe('verifica a função de subtração', () => {
  it('verifica retorno de num1 = 18 e num2 = 20', () => {
    const answer = subtract(18, 20);

    expect(answer).to.be.equals(-2);
  });

  it('verifica retorno de num1 = 56 e num2 = 17', () => {
    const answer = subtract(56, 17);

    expect(answer).to.be.equals(39);
  });

  it('verifica retorno de num1 = 160 e num2 = 114', () => {
    const answer = subtract(160, 114);

    expect(answer).to.be.equals(46);
  });
});

describe('verifica a função de multiplicação', () => {
  it('verifica retorno de num1 = 18 e num2 = 20', () => {
    const answer = multiply(18, 20);

    expect(answer).to.be.equals(360);
  });

  it('verifica retorno de num1 = 56 e num2 = 17', () => {
    const answer = multiply(56, 17);

    expect(answer).to.be.equals(952);
  });

  it('verifica retorno de num1 = 160 e num2 = 114', () => {
    const answer = multiply(160, 114);

    expect(answer).to.be.equals(18240);
  });
});

describe('verifica a função de divisão', () => {
  it('verifica retorno de num1 = 18 e num2 = 20', () => {
    const answer = divide(18, 20);

    expect(answer).to.be.equals(0.9);
  });

  it('verifica retorno de num1 = 56 e num2 = 10', () => {
    const answer = divide(56, 10);

    expect(answer).to.be.equals(5.6);
  });

  it('verifica retorno de num1 = 160 e num2 = 114', () => {
    const answer = divide(60, 3);

    expect(answer).to.be.equals(20);
  });
});

describe('testa os métodos com numeros negativos', () => {
  it('verifica retorno soma com num1 = 10 e num2 = -15', () => {
    const answer = sum(10, -15);

    expect(answer).to.be.equals(-5);
  });

  it('verifica retorno soma com num1 = 45 e num2 = -15', () => {
    const answer = sum(45, -15);

    expect(answer).to.be.equals(30);
  });

  it('verifica retorno subtração com num1 = -15, num2 = 10', () => {
    const answer = subtract(-15, 10);

    expect(answer).to.be.equals(-25);
  });

  it('verifica retorno multiplicação com num1 = 10 e num2 = -5', () => {
    const answer = multiply(10, -5);

    expect(answer).to.be.equals(-50);
  });

  it('verifica retorno divisão com num1 = -10 e num2 = 2', () => {
    const answer = divide(-10, 2);

    expect(answer).to.be.equals(-5);
  });
});

describe('verifica decimais nos métodos multiply e divide', () => {
  it('verifica num1 = 20.5 multiplicado por num2 = 2.6', () => {
    const answer = multiply(20.5, 2.6);

    expect(answer).to.be.equals(53.300000000000004);
  });

  it('verifica num1 = 20.5 dividido por num2 = 2.6', () => {
    const answer = divide(20.5, 2.6);

    expect(answer).to.be.equals(7.884615384615384);
  });
});
