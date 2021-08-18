
// let linha = " ";

// function quadrado(n){
//   for(let index = 0; index < n; index +=1){
//     linha = linha + "*" + " " + " ";
//   }
//   for(index = 0; index < n; index +=1){
//     console.log(linha);
//   }
// };

// quadrado(5);

// //Exercicio 2

// let linha = " ";

// function piramide(n){
//   for (let index = 0; index < n; index +=1){
//     linha = linha + "*" + " " + " ";
//     console.log(linha);
//   }
// };

// piramide(8);

// // // Exercicio 3

// let linha = " ";

// function pirInvert(a){
//   let espaco = a;
//   for(let index = 0; index <= a; index += 1) {
//     for(let coluna = 0; coluna <= a; coluna +=1) {
//       if( coluna < espaco) {
//     linha = linha + " ";

//       } else {
//         linha = linha + "*";
//       }
//     }
//     console.log(linha);
//     linha = " ";
//     espaco -= 1;
//   } 
// }

// pirInvert(10);

// // exercicio 4

let n = 5;
let linha = '';

let meio = (n + 1) / 2;
let esq = meio;
let dir = meio;

for (let index = 0; index <= meio; index += 1) {
  for(let coluna = 0; coluna <= n; coluna += 1) {
    if(coluna > esq && coluna < dir){
      linha = linha + "*";

    } else {
      linha = linha + " ";
    }
  }
  console.log(linha);
  linha = '';
  dir += 1;
  esq -= 1;
}
