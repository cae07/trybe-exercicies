// método disponibilizado para leitura de forma síncrona
// pelo módulo fs é o fs.readFileSync veja o exemplo
const fs = require('fs');
// importamos o fs
const nomeDoArquivo = 'meu-arquivo.txt';
// exemplo de arquivo para ler

try {
  // usando o try / catch
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  // primeiro argumento é o nome do arquivo / segundo argumento opcional
  // define o encoding que será utilizado na leitura, neste caso o utf8
  console.log(data);
  // queremos apenas imprimir o resultado
} catch(err) {
  console.error(`Erro ao lero o arquivo: ${err.path}`);
  console.log(err);
};

// LENDO ARQUIVOS COM MÉTODO ASSINCRONO
// O MÉTODO FORNECIDO PELO fs é o fs.readFile
const fs = require('fs');
// importa o módulo
const nomeDoArquivo2 = 'meu-arquivo2.txt';

fs.readFile(nomeDoArquivo2, 'utf8', (err, data) => {
// esse método recebe 3 parametros/ 1 - nome do arquivo
// 2 - opcional define o encoding que será utilizado para leitura
// 3 - calback para manipular os dados lidos
// a calback recebe 2 paramentros, err e data
  if (err) {
    console.error(`Não foi possível ler arquivo: ${nomeDoArquivo2}/n Erro: ${err}`);
    process.exit(1);
  // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  }
  console.log(`conteúdo do arquivo: ${data}`);
});

// LENDO ARQUIVOS UTILIZANDO PROMISES
const fs = require('fs').promises;
// devemos agora importar com promises
const nomeDoArquivo3 = 'meu-arquivo3.txt';

fs.readFile(nomeDoArquivo3, 'utf8')
  .then((data) => {
    console.log(`conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler arquivo ${nomeDoArquivo3}\n Erro: ${err}`);
    process.exit(1);
  // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  })