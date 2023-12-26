<script>
    import PokemonList from '@/components/PokemonList.vue';
    import PokemonSprite from '@/components/PokemonSprite.vue';
    import { getPokemons } from '../helpers/getPokemons';
    import { getPokemonSprite } from '../helpers/getPokemonSprite';

    export default {
        data() {
            return {
                pokemonList: [],
                pokemonSprite: '',
                pokemonName: '',
            };
        },
        async mounted() {
            const data = await getPokemons();
            this.pokemonList = data.results;
        },
        methods: {
            async clickOnPokemonListItem(name, url) {
                this.pokemonName = name;
                this.pokemonSprite = await getPokemonSprite(url);
            },
        },
        components: { PokemonList, PokemonSprite }
    };
</script>

<template>
  <main>
    <PokemonSprite 
        :pokemonName="pokemonName" 
        :pokemonSprite="pokemonSprite" 
    />
    <PokemonList 
        :pokemonList="pokemonList" 
        :method="clickOnPokemonListItem" 
    />
  </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 520px;
    }
</style>