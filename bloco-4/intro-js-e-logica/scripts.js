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
//usei os conhecimentos da pag (https://odesenvolvedor.com.br/como-descobrir-se-um-numero-e-par-ou-impar-no-javascript_1301.html#:~:text=Como%20verificar%20se%20um%20n%C3%BAmero,6%20ou%208%20%C3%A9%20par.) Para a solução deste.
let numero1 = 317;
let numero2 = 12016;
let numero3 = 117;

if (numero1 % 2 == 0){
  console.log("true");
}
else if (numero2 % 2 == 0){
  console.log("true");
}
else if (numero3 % 2 == 0){
  console.log("true");  

} else {
  console.log("false");
}

//exercicio 9
let numeroImpar1 = 310;
let numeroImpar2 = 12016;
let numeroImpar3 = 110;

if (numeroImpar1 % 2 == 1){
  console.log("true");
}
else if (numeroImpar2 % 2 == 1){
  console.log("true");
}
else if (numeroImpar3 % 2 ==1){
  console.log("true");  

} else {
  console.log("false");
}

//exercicio 10
let custo = 50;
let venda = 120;
let imposto = custo * 20 / 100;
let lucro = (venda - custo - imposto) * 1000;

if (lucro >= 0){
  console.log(lucro);

} else {
  console.log("!!!ERROR!!!");
}

//Exercicio 11
let salarioBruto = 2000;
let impostoINSS = [];
let impostoIR =[];
let salarioLiquido = salarioBruto - impostoINSS - impostoIR;

if (salarioBruto <= 1556.94){
  impostoINSS = (salarioBruto * 8 / 100);
}
else if (salarioBruto <= 2594.92){
  impostoINSS = (salarioBruto * 8 / 100);
}
else if (salarioBruto <= 5189,82){
  impostoINSS = (salarioBruto * 8 / 100);

} else {
  impostoINSS = (570.88);
}

if (salarioBruto <= 1903.98){
  impostoIR = (0);
}
else if (salarioBruto <= 2826.65){
  impostoIR = (salarioBruto * 7.5 / 100) + (142.8);
}
else if (salarioBruto <= 4664.68){
  impostoIR = (salarioBruto * 22.5 / 100) + (636.13);

} else {
  impostoIR = (863,36)
}

console.log(impostoINSS);
console.log(impostoIR);
console.log(salarioBruto - impostoINSS - impostoIR);
