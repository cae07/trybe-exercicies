"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function notExistError(unity) {
    throw new Error(`O valor ${unity} não é uma unidade válida.`);
}
function validateUnity(unity) {
    if (!units.includes(unity))
        notExistError(unity);
    return true;
}
function getExponent(from, to) {
    const indexFrom = units.indexOf(from);
    const indexTo = units.indexOf(to);
    return indexFrom - indexTo;
}
function convert(valor, from, to) {
    validateUnity(from);
    validateUnity(to);
    const exponent = getExponent(from, to);
    return valor * Math.pow(10, exponent);
}
exports.convert = convert;
