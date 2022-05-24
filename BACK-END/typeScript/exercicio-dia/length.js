"use strict";
// Exercício 1: Crie um script para converter unidades de medida de comprimento:
// Esse script deverá possuir uma função chamada convert que recebe como
// parâmetro:
// - valor - number
// - unidade base - string
// - unidade para a conversão - string
exports.__esModule = true;
exports.convert = void 0;
var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function typeNotExist(unity) {
    throw new Error("O valor ".concat(unity, " n\u00E3o \u00E9 uma unidade v\u00E1lida."));
}
function verifyUnits(unity) {
    if (!units.includes(unity))
        typeNotExist(unity);
    return true;
}
function getExponent(base, convertTo) {
    var getBaseIndex = units.indexOf(base);
    var getToIndex = units.indexOf(convertTo);
    return getBaseIndex - getToIndex;
}
function convert(valor, base, convertTo) {
    verifyUnits(base);
    verifyUnits(convertTo);
    var exponent = getExponent(base, convertTo);
    return valor * Math.pow(10, exponent);
}
exports.convert = convert;
