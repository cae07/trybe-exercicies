export function greeter(name: string) {
  return `Olá ${name}`;
};

export function personaAge(name: string, age: number) {
  return `${name} tem ${age} anos`;
};

export function add(x: number, y: number): number {
  return x + y;
};

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
};

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
};

export function square(side: number): number {
  return side ** 2;
};

export function rectangle(base: number, height: number): number {
  return base * height;
};

export function losangle(highDiagonal: number, lowDiagonal: number): number {
  return (highDiagonal * lowDiagonal) / 2;
};

export function trapezie(height: number, highBase: number, lowBase: number): number {
  return ((highBase + lowBase) * height) / 2;
};

export function circle(radium: number): number {
  return 3.14 * (radium ** 2);
};
