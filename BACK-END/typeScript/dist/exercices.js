"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos de idade.`;
}
exports.personAge = personAge;
// auxiliar para somar o array
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// calcula a área do triangulo
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
// calcula a área do quadrado
function square(side) {
    return side ** 2;
}
exports.square = square;
// exemplo em arrow function com export a parte;
// calcula a área do retangulo
const rectangle = (base, height) => {
    return base * height;
};
exports.rectangle = rectangle;
const losangle = (D, d) => {
    return (D * d) / 2;
};
exports.losangle = losangle;
