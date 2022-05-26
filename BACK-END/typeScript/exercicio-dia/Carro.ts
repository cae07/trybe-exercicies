// Crie uma classe Car cuja o objeto representará um carro.
// Propriedades:
// Deve conter uma propriedade do tipo string chamada make que representa a marca.
// Deve conter uma propriedade do tipo enum chamada color que representa a cor.
// A cor pode ser: preta, branca, vermelha ou prata.
// Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
// Comportamentos:
// Deve conter um método chamado honk que aciona a buzina do carro.
// Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre.
// Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha.
// Deve possuir um método chamado turnOn que liga o carro.
// Deve possuir um método chamado turnOff que desliga o carro.
// Deve possuir um método chamado speedUp que acelera o carro.
// Deve possuir um método chamado speedDown que reduz a velocidade do carro.
// Deve possuir um método chamado stop que para o carro.
// Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro.

enum Color {
  BLACK = "Preto",
  WHITE = "Branco",
  RED = "Vermelho",
  SILVER = "Prata",
};

enum Porta {
  LEFT = "Esquerda",
  RIGHT = "Direita",
}

enum Direcao {
  LEFT = "Esquerda",
  RIGHT = "Direita",
}

interface Carro {
  make: string;
  doors: number;
  color: Color;
  honk(): void;
  openTheDoor(l: Porta): void;
  closeTheDoor(l: Porta): void;
  turnOn(): void;
  turnOff(): void;
  speedUp(): void;
  speedDown(): void;
  stop(): void;
  turn(d: Direcao): void;
}

class Carro {
  constructor(make: string, color: Color, doors: number) {
    this.make = make;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log("Bi, Bi");
  }

  openTheDoor(lado: Porta) {
    console.log(`Abrindo a porta ${lado}`);
  }

  closeTheDoor(lado: Porta) {
    console.log(`Fechando a porta ${lado}`);
  }

  turnOn() {
    console.log("Carro ligado.");
  }

  turnOff() {
    console.log("Carro desligado.");
  }

  speedUp() {
    console.log("Acelerando o carro.");
  }

  speedDown() {
    console.log("Desacelerando o carro.");
  }

  stop() {
    console.log("Carro parado.");
  }

  turn(direcao: Direcao) {
    console.log(`Virando para ${direcao}`);
  }

}

export default Car;
