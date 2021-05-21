// //exercicio 6
//Ajudado pelo Suma no plantão
let numbers6 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroImpar = 0;
let numeroPar = 0;

for (index6 = 0; index6 < numbers6.length; index6 += 1){
  if (numbers6[index6] % 2 === 0){
    numeroPar += 1;

  } else {
    numeroImpar += 1;
  }
}
console.log(`Número par: ${numeroPar} Número ímpar: ${numeroImpar}`)

// //exercicio 7
// let numbers7 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorNumero = 0;

//   for (let index7 = 0; index7 < numbers7.length; index7 += 1){
//     if(numbers7[index7] < menorNumero);
//     menorNumero = numbers7[index7];
//   }

// console.log(`O menor número é: ${menorNumero}`);

//exercicio 8
let number8 = 0;

for (index8 = 0; index8 < 25; index8 += 1){
  number8 = number8 + 1;
  console.log(number8);
  console.log("*");
}

//exercicio 9
let numbers9 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let metadeDoNumero = 0;

for (let index9 = 0; index9 < numbers9.length; index9 += 1){
  metadeDoNumero = numbers9[index9] / 2;
  console.log(`A metade do número ${numbers9[index9]} é: ${metadeDoNumero}`);
}

