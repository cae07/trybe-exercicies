let n = 5;
let linha = " "; 

for (index = 0; index < n; index +=1){
  linha = linha + "*" + " ";
  console.log (linha);
}
// for (let index = 0; index < n; index +=1){
//   console.log(linha);
// 
let n2 = 5;
let simbolo2 = "*";

for (let index2 = 0; index2 < n2; index2 +=1){
  console.log(simbolo2);
  if(index2 < n2){
    simbolo2 = simbolo2 + "*";
  }
}
