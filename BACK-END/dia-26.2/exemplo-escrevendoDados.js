// UTILIZAMOS O MÉTODO writeFile
// utilizaremos apenas o promises já que o uso é mais encorajado do que calbacks
const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso');
  })
  .catch((err) => {
    console.error(`Erro ao escrever arquivo: ${err.message}`);
  });

// depois de rodar o script node nomeDoFile, o conteúdo será alterado para "Meu Textão"

// ESCREVENDO DADOS COM ASYNC AWAIT
const fs = require('fs').promises;

async function main() {
  // para isso criamos a function main e informamos que é async
  try {
  // fazemos um try / catch
    await fs.writeFile('./meu-arquivo.txt', "Meu textão");
  // informamos que queremos esperar terminar de escrever com await
  } catch(err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  };
};

main();
