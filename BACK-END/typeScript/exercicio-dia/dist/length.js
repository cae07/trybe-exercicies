"use strict";
// Exercício 1: Crie um script para converter unidades de medida de comprimento:
// Esse script deverá possuir uma função chamada convert que recebe como
// parâmetro:
// - valor - number
// - unidade base - string
// - unidade para a conversão - string
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function typeNotExist(unity) {
    throw new Error(`O valor ${unity} não é uma unidade válida.`);
}
function verifyUnits(unity) {
    if (!units.includes(unity))
        typeNotExist(unity);
    return true;
}
function getExponent(base, convertTo) {
    const getBaseIndex = units.indexOf(base);
    const getToIndex = units.indexOf(convertTo);
    return getBaseIndex - getToIndex;
}
function convert(valor, base, convertTo) {
    verifyUnits(base);
    verifyUnits(convertTo);
    const exponent = getExponent(base, convertTo);
    return valor * Math.pow(10, exponent);
}
exports.convert = convert;
