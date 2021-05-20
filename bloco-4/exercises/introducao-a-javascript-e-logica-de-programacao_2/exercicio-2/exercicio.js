//Pesquisei na url: https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer/#:~:text=reduce(),os%20valores%20de%20um%20Array.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumbers = numbers.reduce((somaNumbers, valorAtual) => somaNumbers + valorAtual);
console.log(somaNumbers);
