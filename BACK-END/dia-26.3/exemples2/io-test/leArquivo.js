const fs = require('fs');

const leArquivo = (file) => {
  try {
    const conteudoDoArquivo = fs.readFileSync(file, 'utf8');

    return conteudoDoArquivo;
  } catch(err) {
    return null;
  };
};

module.exports = leArquivo;
