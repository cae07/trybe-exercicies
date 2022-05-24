const units: string[] = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function notExistError(unity: string): Error {
  throw new Error(`O valor ${unity} não é uma unidade válida.`);
}

export function convert(valor: number, from: string, to: string): number {
  if (!units.includes(from)) notExistError(from);
  if (!units.includes(to)) notExistError(from);

  const indexFrom: number = units.indexOf(from);
  const indexTo: number = units.indexOf(to);
  const exponent: number = indexFrom - indexTo;

  return valor * Math.pow(10, exponent);
}