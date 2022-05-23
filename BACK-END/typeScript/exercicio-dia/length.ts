// Exercício 1: Crie um script para converter unidades de medida de comprimento:
// Esse script deverá possuir uma função chamada convert que recebe como
// parâmetro:
// - valor - number
// - unidade base - string
// - unidade para a conversão - string


const units: string[] = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function typeNotExist(unity: string): Error {
  throw new Error(`O valor ${unity} não é uma unidade válida.`);
}

function verifyUnits(unity: string): boolean {
  if (!units.includes(unity)) typeNotExist(unity);
  return true;
}

function getExponent(base: string, convertTo: string): number {
  const getBaseIndex: number = units.indexOf(base);
  const getToIndex: number = units.indexOf(convertTo);
  return getBaseIndex - getToIndex;
}

function convert(valor: number, base: string, convertTo: string): number {
  verifyUnits(base);
  verifyUnits(convertTo);
  const exponent: number = getExponent(base, convertTo);

  return valor * Math.pow(10, exponent);
}
