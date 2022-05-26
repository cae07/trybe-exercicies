// Crie uma interface cujo objeto represente um Automóvel.
interface Car {
  nome: string | number;
  marca: string;
  ano: number;
}

class Car {
  constructor(nome: string | number, marca: string, ano: number) {
    this.nome = nome;
    this.marca = marca;
    this.ano = ano;
  }
}

const meuCarro = new Car(207, "Peugeot", 2014);
const carroDaMamãe = new Car("C3", "Citroen", 2014);

// Crie uma interface cujo objeto represente um Felino.
interface Cat {
  raça: string;
  idade: number;
}

// Crie uma interface cujo objeto represente uma Aeronave.
interface Airplane {
  modelo: string;
  ano: Date;
}