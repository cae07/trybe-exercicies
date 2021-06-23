//  Exercicio 1 - Parte 1
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}


testingScope(true);

//  Exercicio 2 - Parte 1
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//  Exercicio 1 - Parte 2
function fatorial(numero) {
  let fatorN = numero;

  for (let fator = 1; fator < numero; fator += 1) {
    fatorN *= fator;
  }
  return fatorN;
}

console.log(fatorial(4));
//  mesmo exercicio com Arrow Functions

const fatorial = numero => {
  let fatorN = numero;
  
  for (let fator = 1; fator < numero; fator += 1) {
    fatorN *= fator;
  }
  return fatorN;
}

console.log(fatorial(4));

//  Fazendo em ternary operator 
// const fatorial = numero => (
//   numero > 0 ? numero *= (numero - 1) : numero
// )

// console.log(fatorial(4));

//  Exercicio 2 - Parte 2
