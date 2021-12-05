const calculaMedia = (media) => {
  if (media < 7) return "reprovado";

  return "aprovado";
};

module.exports = calculaMedia;
