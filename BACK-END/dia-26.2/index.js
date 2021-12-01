// exercicio 1. Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número,
// rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros
// e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com
// o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function calcula(num1, num2, num3) {
  
  const promise = new Promise((resolve, reject) =>{
    if((typeof num1 !== "number") || (typeof num1 !== "number") || (typeof num3 !== "number")) {
      reject(new Error("Não é permitido valores não numéricos"));
    };

    const equation = (num1 + num2) * num3;
    if (equation < 50) reject(new Error("valor muito baixo"));
  
    resolve(equation);
  });

  return promise;
};

console.log(calcula(10, 2, 13));