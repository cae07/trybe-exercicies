import { pipeline } from "stream";

export function greeter(name: string): string {
  return `Olá ${name}`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos de idade.`;
}

// auxiliar para somar o array
export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// calcula a área do triangulo
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

// calcula a área do quadrado
export function square(side: number): number {
  return side ** 2;
}

// exemplo em arrow function com export a parte;
// calcula a área do retangulo
const rectangle = (base: number, height: number): number => {
  return base * height;
}

const losangle = (D: number, d: number): number => {
  return (D * d) / 2;
}

const trapezie = (height: number, B: number, b: number): number => {
  return ((B + b) * height) / 2;
}

const circle = (raio: number) : number => {
  const PI = 3.14;
  return (raio ** 2) * PI;
}

export {
  rectangle,
  losangle,
  trapezie,
  circle,
};