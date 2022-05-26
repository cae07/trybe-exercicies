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
type Address = {
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type EstadosDaMateria = "liquido" | "solido" | "gasoso";

// Crie um type union que represente o documento identificador de uma pessoa
// que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type cpf = string | number;

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type sistemaOperacional = "linux" | "mac" | "windows";

// Crie um type union que represente as vogais do alfabeto.
type alphabet = "a" | "e" | "i" | "o" | "u";