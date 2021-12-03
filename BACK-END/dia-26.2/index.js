// exercicio 1. Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número,
// rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros
// e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com
// o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function calcula(num1, num2, num3) {
  
  const promise = new Promise((resolve, reject) => {
    if((typeof num1 !== "number") || (typeof num2 !== "number") || (typeof num3 !== "number")) {
      reject(new Error("Não é permitido valores não numéricos"));
    };

    const equation = (num1 + num2) * num3;
    if (equation < 50) reject(new Error("valor muito baixo"));
  
    resolve(equation);
  });

  return promise;
};

//  2. Escreva um código para consumir a função construída no exercício anterior.
// 2.1 - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe.
// Para gerar um número aleatório, utilize o seguinte trecho de código: 
// 2.2 - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Math.floor(Math.random() * 100 + 1) .
// 2.3 - Utilize then e catch para manipular a Promise retornada pela função:

// 2.3.1 - Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// 2.3.2 - Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
// function randomNumber() {
//   const num1 = Math.floor(Math.random() * 100 + 1);
//   const num2 = Math.floor(Math.random() * 100 + 1);
//   const num3 = Math.floor(Math.random() * 100 + 1);

//   console.log(`num1 = ${num1}`);
//   console.log(`num2 = ${num2}`);
//   console.log(`num3 = ${num3}`);

//   calcula(num1, num2, num3)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err.message));
// };

// randomNumber()

// 3. Reescreva o código do exercício anterior para que utilize async/await
async function randomNumber() {
  const num1 = await Math.floor(Math.random() * 100 + 1);
  const num2 = await Math.floor(Math.random() * 100 + 1);
  const num3 = await Math.floor(Math.random() * 100 + 1);

  console.log(`num1 = ${num1}`);
  console.log(`num2 = ${num2}`);
  console.log(`num3 = ${num3}`);

  calcula(num1, num2, num3)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
};

randomNumber()