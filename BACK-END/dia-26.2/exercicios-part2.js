// 1 . Crie uma função que leia todos os dados do arquivo e imprima cada personagem
// no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const fs = require('fs');
const axios = require('axios');

const url = "./simpsons.json";

async function lerSimpsons() {
  const getSimpsons = await axios.get(url);
  console.log(getSimpsons.name);
  // try {
  //   const data = getSimpsons.forEach((simpson) => console.log(simpson));
  // } catch (err) {
  //   console.log(`Erro ao ler arquivo ${err.path}`);
  // };
};

lerSimpsons();
