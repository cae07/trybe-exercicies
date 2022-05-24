const units: string[] = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function notExistError(unity: string): Error {
  throw new Error(`O valor ${unity} não é uma unidade válida.`);
}

function validateUnity(unity: string): boolean {
  if (!units.includes(unity)) notExistError(unity);
  return true;
}

function getExponent(from: string, to: string): number {
  const indexFrom: number = units.indexOf(from);
  const indexTo: number = units.indexOf(to);
  return indexFrom - indexTo;
}

export function convert(valor: number, from: string, to: string): number {
  validateUnity(from);
  validateUnity(to);
  const exponent: number = getExponent(from, to);
  
  return valor * Math.pow(10, exponent);
}