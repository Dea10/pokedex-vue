<script>
export default {
  props: {
    pokemonList: Array,
    method: Function,
  },
};
</script>
<template>
    <div class="list-container">
        <div
          v-for="pokemon in pokemonList"
          :key="pokemon"
          @click="method(pokemon.name, pokemon.url)"
        >
          {{ pokemon.name }}
        </div>
    </div>
</template>

<style>
    .list-container {
        display: flex;
        flex-wrap: wrap;
    }

    .list-container div {
        border: 1px solid yellow;
        border-radius: 5px;
        padding: 4px;
        margin: 2px;
        cursor: pointer;
        width: 100px;
        box-sizing: border-box;
        text-align: center;
    }
</style>