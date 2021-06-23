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


