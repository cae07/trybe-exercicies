const { expect } = require('chai');
const calculaMedia = require('../calculaMedia.js');

describe('Testando se a média tem retorno esperado', () => {
  it('retorna reprovado quando média 6', () => {
    const answer = calculaMedia(6);

    expect(answer).to.be.equals('reprovado');
  });

  it('retorna aprovado quando média 9', () => {
    const answer = calculaMedia(9);

    expect(answer).to.be.equals('aprovado');
  });

  it('retorna aprovado quando média 7', () => {
    const answer = calculaMedia(7);

    expect(answer).to.be.equals('aprovado');
  });
});
