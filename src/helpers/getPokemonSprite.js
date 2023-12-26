export const getPokemonSprite = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    return data.sprites.front_default;
}