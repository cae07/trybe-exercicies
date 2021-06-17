const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    return ifScope;
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    return elseScope;
  }
}

console.log(testingScope(false));