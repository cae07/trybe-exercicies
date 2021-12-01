function calculaDivisao(num1, num2) {
  if(num2 === 0) throw new Error("Não é permitido dividir valores por 0");

  return num1 / num2;
};

// tratando os erros
try {
  const resultado = calculaDivisao(2, 1);
  console.log(`resultado: ${resultado}`);
} catch(error) {
  console.log(error.message);
};