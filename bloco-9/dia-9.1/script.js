//  EXERCICIO 3 DIA 9.1

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => console.log("Returned planet: ", mars), 4000) ;
// };

// getPlanet(); // imprime Marte depois de 4 segundos

// // setTimeout(() => console.log(getPlanet()), 4000);

//  EXERCICIO 4 DIA 9.1

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = (temperature) => {
//   return `Mars temperature is: ${temperature}`;
// }

// console.log(sendMarsTemperature(getMarsTemperature())); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

//  EXERCICIO 5 DIA 9.1 

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

const sendMarsTemperature = (temperature) => {
  return `Mars temperature is: ${temperature}`;
}

sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature())); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet(getMarsTemperature())); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
