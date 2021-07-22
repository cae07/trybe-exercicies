//  Exercicio antes da aula ao vivo
const acordando = () => 'acordando!!';

const cafe = () => 'Bora tomar cafe!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(acordando));
console.log(doingThings(cafe));
console.log(doingThings(dormir));

//  Exercicio 1 -Parte 1

const newEmployees = () => {
  const employees = {
    id1: formulario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: formulario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: formulario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const formulario = nome => ({nome: nome, email: `${nome.split(' ').join('')}@trybe.com`});

console.log (newEmployees());

//  Exercicio 2 - Parte 1

const playPlayer = () => Math.floor(Math.random() * 5) + 1;
const sorteio = () => Math.floor(Math.random() * 5) + 1;

const result = (bet, sorteio) => playPlayer() === sorteio() ? `Parabéns você ganhou` : `Tente Novamente`;

console.log(result(playPlayer, sorteio));

//  Exercicio 3

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = () => {
  const pontos = 0;

  for (let checagem = 0; checagem < rightAnswers.length; checagem += 1) {
    if (rightAnswers[checagem] === studentAnswers[checagem]) {
      pontos += 1;
    } else if (rightAnswers[checagem] === 'N.A') {
      pontos = pontos;
    }
    pontos -= 0.5;
  }
  return pontos;
  console.log(pontos)
}
console.log(check());

const result = (rightAnswers, studentAnswers, check) => `Sua nota é ${check()}`;

console. log(result());
