<script>
    export default {
        props: {
            pokemonList: Array,
            method: Function
        },
    };
</script>
<template>
    <ul>
        <li 
            v-for="pokemon in pokemonList" 
            :key="pokemon"
            @click="method(pokemon.name, pokemon.url)"
        >{{ pokemon.name }}</li>
    </ul>
</template>
