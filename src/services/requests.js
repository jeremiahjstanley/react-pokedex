export const fetchPokemon = async () => {
  const url = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;
  const response = await fetch(url);
  return await response.json();
};
