let condicao = "reprovada";

switch (condicao){
  case "aprovada":
    console.log("Parabéns, você foi aprovada");
    break;

  case "lista":
    console.log("Quase! Mas está na lista");
    break;

  case "reprovada":
    console.log("Desculpe. Você não conseguiu");
    break;

  default:
    console.log("Não se aplica.")
}