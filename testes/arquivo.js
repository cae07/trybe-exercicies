// const array = [1, 3, 5, 4, 0, 0, 7, 0, 0, 6]

// console.log(`array 0 - ${array}`);

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === 0) {
//     array.splice(i - 1, 2)
//   }
// };

// console.log(`array 1 - ${array}`);

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === 0) {
//     array.splice(i - 1, 2)
//   }
// };

// console.log(`array 2 - ${array}`);

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === 0) {
//     array.splice(i - 1, 2)
//   }
// };

// console.log(`array 3 - ${array}`);


const array = [1, 3, 5, 4, 0, 0, 7, 0, 0, 6]

for (let i = 0; i < array.length; i += 1) {
  for (let y = 0; y < array.length; i += 1) {
    console.log(`i = ${array[i]}`);
    console.log(`y = ${array[y]}`);
  }
}