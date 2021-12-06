const axios = require('axios');


const getPokemon = async (id) => {
  const pokemonApi = `https://pokeapi.co/api/v2/berry/${id}`;
  const pokemon = await axios.get(pokemonApi);
  return pokemon.data;
};

async function main() {
  const promises = [];
  for (let index = 1; index <= 50; index += 1) {
    const pokemon = getPokemon(index);
    promises.push(pokemon);    
  };

  const pokemons = await Promise.all(promises);
  // pokemons.forEach((pokemon) => console.log(pokemon.name));
  console.log(pokemons);
};

main();
