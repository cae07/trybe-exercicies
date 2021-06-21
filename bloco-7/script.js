//  Exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    return ifScope;
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    return elseScope;
  }
}

console.log(testingScope(false));

//  Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente.`);

oddsAndEvens.sort((a,b) => b - a);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma decrescente.`);

// Exercicio 3 arrow function comum
// const fatorial = n => {
//   if (n > 1) {
//     return n * fatorial(n - 1);
//   }
//   return n;
// }
// console.log(fatorial(5));
//  Ternary operator .
const fatorial = n => n > 1 ? n * fatorial(n - 1) : n;

console.log(fatorial(5));
