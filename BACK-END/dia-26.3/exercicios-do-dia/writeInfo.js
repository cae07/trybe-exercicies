const fs = require('fs').promises;

const writeInfo = async (name, file) => {
  try {
    await fs.writeFile(name, file);
    return 'ok';
  } catch (err) {
    console.error(`Erro ao escrever no arquivo: ${err.message}`);
  };
};

module.exports = writeInfo;
