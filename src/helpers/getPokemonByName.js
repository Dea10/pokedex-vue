export const getPokemonByName = async (pokemonName) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const { id, height, weight, sprites } = await res.json();

    return {id, height, weight, sprite: sprites.front_default}
}