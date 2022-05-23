import * as Exercise from './exercices';

console.log(Exercise.greeter("Maria"));
console.log(Exercise.personAge("Caê", 40));
console.log(`A soma do array é ${Exercise.sumArray([1, 2, 3, 4])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.rectangle(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagonal menor 50cm: ${Exercise.rectangle(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagonal menor 25cm: ${Exercise.rectangle(75, 25)}cm²`);
