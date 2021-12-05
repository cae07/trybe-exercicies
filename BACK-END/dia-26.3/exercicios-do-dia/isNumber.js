const isNumber = (number) => {
  if (number < 0) return "negativo";
  if (number === 0) return "neutro";
  if (number > 0) return "positivo";
};

module.exports = isNumber;
