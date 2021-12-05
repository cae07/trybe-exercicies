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
