// Crie uma classe cujo objeto represente um Cachorro.
interface Dog {
  nome: string;
  raca: string;
  pegarBolinha(): string;
  rolar(l: string): string;
}

class Dog {
  constructor(nome: string, raca: string) {
    this.nome = nome;
    this.raca = raca;
  }

  pegarBolinha() {
    return `${this.nome} da raça ${this.raca} buscou a bolinha.`;
  }

  rolar(lado: string) {
    return `${this.nome} rolou para a ${lado}`;
  }
}


// Crie uma classe cujo objeto represente uma Casa.
class House {
  tamanho: number;
  andares: number;
  quartos: number;
  banheiros: number;
  sacada: boolean;

  constructor(tamanho: number, andares: number, quartos: number, banheiros: number, sacada: boolean) {
    this.tamanho = tamanho;
    this.andares = andares;
    this.quartos = quartos;
    this. banheiros = banheiros;
    this.sacada = sacada;
  }

  getHouse() {
    return this;
  }
}
// Crie uma classe cujo objeto represente um Voo.
class Flight {
  to: string;
  from: string;
  dateFlight: Date;

  constructor(to: string, from: string, dateFlight: Date) {
    this.to = to;
    this.from = from;
    this.dateFlight = dateFlight;
  }

  getFlight() {
    return this;
  }
}