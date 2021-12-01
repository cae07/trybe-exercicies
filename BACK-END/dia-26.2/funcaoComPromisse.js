function calculaDivisao(num1, num2) {
  const promisse = new Promise((resolve, reject) => {
    if(num2 === 0) reject(new Error("Não é permitido dividir valores por 0"));

    const resultado = num1 / num2;
    resolve(resultado);
  });

  return promisse;
};

calculaDivisao(2, 1)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((error) => console.log(`erro: ${error.message}`));
