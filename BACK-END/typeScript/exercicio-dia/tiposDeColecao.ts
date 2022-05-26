// Crie um type para um objeto que represente um pássaro.
type Bird = {
  head: string;
  body: string;
  wings: string;
  patas: string;
}

// Crie um type que represente uma função que recebe
// 2 valores numéricos e retorna a soma dos dois.
type Calculator = {
  x: number;
  y: number;
}

function sum(cal: Calculator): number {
  return cal.x + cal.y;
}

console.log(sum({x: 10, y: 20}));



// Crie um type para um objeto que represente um endereço.
type Adrees = {
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}
