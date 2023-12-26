<script>
    export default {
        props: {
            pokemonName: String,
            pokemonSprite: String,
        },
        methods: {
            handleOnClick() {
                if(!this.pokemonName) return;

                this.$router.push({
                    name: 'pokemon',
                    params: { pokemon: this.pokemonName }
                });
            }
        }
    }
</script>

<template>
    <div @click="handleOnClick" class="pokedex-screen">
        <img :src="pokemonSprite" :alt="pokemonName">
    </div>
    <p>{{ pokemonName }}</p>
</template>

<style>
    .pokedex-screen {
        border: 1px solid black;
        width: 100px;
        height: 100px;
    }
</style>