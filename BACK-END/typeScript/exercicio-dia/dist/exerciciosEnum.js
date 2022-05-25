"use strict";
// Crie uma Enum que represente os dias da semana. Seu valor deve ser número do dia.
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["domingo"] = 1] = "domingo";
    DaysOfWeek[DaysOfWeek["segunda"] = 2] = "segunda";
    DaysOfWeek[DaysOfWeek["terca"] = 3] = "terca";
    DaysOfWeek[DaysOfWeek["quarta"] = 4] = "quarta";
    DaysOfWeek[DaysOfWeek["quinta"] = 5] = "quinta";
    DaysOfWeek[DaysOfWeek["sexta"] = 6] = "sexta";
    DaysOfWeek[DaysOfWeek["sabado"] = 7] = "sabado";
})(DaysOfWeek || (DaysOfWeek = {}));
;
const quartaFeira = DaysOfWeek["quarta"]; // saida => 4
const quartaFeiraString = DaysOfWeek[4]; // saida => quarta
console.log(quartaFeira);
console.log(quartaFeiraString);
// Crie uma Enum que represente as cores do arco iris. Seu valor deve ser o nome das cores em português.
var RaimbowColors;
(function (RaimbowColors) {
    RaimbowColors["Red"] = "Vermelho";
    RaimbowColors["Orange"] = "Laranja";
    RaimbowColors["Yellow"] = "Amarelo";
    RaimbowColors["Green"] = "Verde";
    RaimbowColors["Blue"] = "Azul";
    RaimbowColors["Anil"] = "Anil";
    RaimbowColors["Violet"] = "Violeta";
})(RaimbowColors || (RaimbowColors = {}));
// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
var Actions;
(function (Actions) {
    Actions[Actions["salvar"] = 1] = "salvar";
    Actions[Actions["imprimir"] = 2] = "imprimir";
    Actions[Actions["abrir"] = 3] = "abrir";
    Actions[Actions["visualizar"] = 4] = "visualizar";
    Actions[Actions["fechar"] = 5] = "fechar";
})(Actions || (Actions = {}));
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
var Cardinals;
(function (Cardinals) {
    Cardinals["Norte"] = "N";
    Cardinals["Leste"] = "L";
    Cardinals["Sul"] = "S";
    Cardinals["Oeste"] = "O";
})(Cardinals || (Cardinals = {}));
