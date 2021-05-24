let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// //Exercicio 1
// //console.log(`Bem vinda, ${info.personagem}`);

// // Exercicio 2
// info.recorrente = "sim";

// console.log(info);

// // Exercicio 3
// for(index in info){
//   console.log(index);
// };

// // Exercicio 4
// for(index in info){
//   console.log(info[index]);
// };

// Exercicio 5

info.personagem = "Margarida e Tio Patinhas";
info.origem = "Pato Donald e Christmas on Bear Montain, Dell's Four Color Comics #178";
info.nota = "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas";
info.recorrente = "ambos sim";

for (index in info){
  console.log(info[index]);
};
