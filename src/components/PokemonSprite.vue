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
        <img v-if="pokemonName" :src="pokemonSprite" :alt="pokemonName">
        <p v-else>Choose a Pokemon!</p>
    </div>
    <p>{{ pokemonName }}</p>
</template>

<style>
    .pokedex-screen {
        display: flex;
        align-items: center;
        border: 1px solid black;
        width: 100px;
        height: 100px;
    }

    .pokedex-screen p {
        text-align: center;
    }
</style>