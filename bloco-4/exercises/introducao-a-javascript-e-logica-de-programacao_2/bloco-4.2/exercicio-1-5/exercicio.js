//exercicio 1
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index1 = 0; index1 < numbers1.length; index1 += 1){
  console.log(`Indice: ${index1} Número ${numbers1[index1]}`);
}

//exercicio 2
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma2 = 0;

for (let index2 = 0; index2 < numbers2.length; index2 += 1){
  soma2 = (soma2 + numbers2[index2]);
}
console.log(soma2);

//exercicio 3
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma3 = 0;

for (let index3 = 0; index3 < numbers3.length; index3 += 1){
  soma3 = (soma3 + numbers3[index3]);
}
let media3 = soma3 / 10;

console.log(media3);

//exercicio 4
let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma4 = 0;

for (let index4 = 0; index4 < numbers4.length; index4 += 1){
  soma4 = (soma4 + numbers4[index4]);
}
let media4 = soma4 / 10;

if (media4 > 20){
  console.log("Número é maior que 20");

} else {
  console.log("Número é igual ou menor que 20");
}

//exercicio 5
//pesquisei na url: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = 0;

for (let index5 = 0; index5 < numbers5.length; index5 += 1){
  if (numbers5[index5] > numeroMaior){
    numeroMaior = numbers5[index5];
  }
}
console.log(numeroMaior);
