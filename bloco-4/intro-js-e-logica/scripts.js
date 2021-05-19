// exercicio 1
let a = 5;
let b = 16;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//exercicio 2
if (a > b){
  console.log(a);
} else {
  console.log(b);
}

//exercicio 3
let x = 554;
let y = 205;
let z = 50;

if (x > 20 && x > z){
  console.log(x);
}
else if (y > x && y > z){
  console.log(y);
} else {
  console.log(z);
}

//exercicio 4
let numero = -18;

if (numero < 0){
  console.log("negative");
} else {
  console.log("positive");
}

//exercicio 5
let angulo1 = 10;
let angulo2 = 50;
let angulo3 = 120;

if (angulo1 + angulo2 + angulo3 == 180){
  console.log("true");
} 
else if(angulo1 + angulo2 + angulo3 >= 181){
  console.log("false")
}
else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
  console.log("error");
}else {
  console.log("false");
}

//exercicio 6
let peao = "anda para frente uma casa e come em diagonal";
let torre = "anda quantas casas quiser na horizontal ou vertical";
let bispo = "anda quantas casas quiser nas diagonais";
let cavalo = "anda em L, 2 casas pra frente e uma para o lado";
let rainha = "Anda quantas casas quiser em qualquer direção";
let rei = "anda para qualquer direção mas uma casa por vez";
let pecaDoJogo = "peao";

if (pecaDoJogo == "peao"){
  console.log(peao);
}
else if (pecaDoJogo == "torre"){
  console.log(torre);
}
else if (pecaDoJogo == "bispo"){
  console.log(bispo);
}
else if (pecaDoJogo == "cavalo"){
  console.log(cavalo);
}
else if (pecaDoJogo == "rainha"){
  console.log(rainha);
}
else if (pecaDoJogo == "rei"){
  console.log(rei);
} else {
  console.log("!!!ERROR!!!");
}

//exercicio 7
let nota = 20;

if (nota > 101){
  console.log("!!!ERROR!!!")
}
else if (nota >= 90){
  console.log("A");
}
else if (nota >= 80 ){
  console.log("B");
}
else if (nota >= 70 ){
  console.log("C");
}
else if (nota >= 60){
  console.log("D");
}
else if (nota >= 50){
  console.log("E");
} 
else if(nota >= 0) {
  console.log("F");
} else {
  console.log("!!!ERROR!!!");
}

//exercicio 8
let numero1;
let numero2;
let numero3;

//exercicio 9