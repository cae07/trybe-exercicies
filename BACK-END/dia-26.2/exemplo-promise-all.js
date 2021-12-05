const fs = require('fs').promises;
// chamamos modulo fs com promises

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log((`Lidos 3 arquivos totalizando ${fileSizeSum} bytes.`));
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

// Agora, estamos lendo os três arquivos ao mesmo tempo, e nosso .then será
// executado quando a leitura de todos eles terminar, recebendo como parâmetro
// um array com o resultado de cada uma das Promises.
