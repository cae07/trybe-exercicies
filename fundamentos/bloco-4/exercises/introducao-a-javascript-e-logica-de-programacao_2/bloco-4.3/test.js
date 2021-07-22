// function square(n){
//   let linha = '';
//   for(let index = 0; index < n; index += 1) {
//     linha = linha + "*" + " " + " ";
//   }
//   for(let index = 0; index < n; index += 1) {
//     console.log(linha);
//   }
// }

// // square(8)

// function piramide(n){
//   let linha = '';
//   for(let index = 0; index < n; index +=1) {
//     linha = linha + "*" + " " + " ";
//     console.log(linha);
//   }
// }

// piramide(10);
function pirInvert(n){
  let linha = '';
  let espaco = n;
  for(let index = 0; index <= n; index +=1) {
    for(let coluna = 0; coluna <= n; coluna +=1) {
      if(coluna < espaco){
        linha = linha + ' ';

      } else {
        linha = linha + ' ' + '*';
      }
    }
    console.log(linha);
    linha = '';
    espaco -= 1;
  }
}

pirInvert(5);