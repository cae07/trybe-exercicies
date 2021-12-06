const isNumber = (number) => {
  if(typeof number !== 'number') return "o valor deve ser um número";
  if (number < 0) return "negativo";
  if (number === 0) return "neutro";
  if (number > 0) return "positivo";
};

module.exports = isNumber;
