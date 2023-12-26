<script>
  import { getPokemonByName } from '@/helpers/getPokemonByName';
  
  export default {
    data() {
      return {
        id: '',
        height: '',
        weight: '',
        spriteUrl: ''
      }
    },
    computed: {
      pokemon() {
        return this.$route.params.pokemon
      }
    },
    async mounted() {
      const {id, height, weight, sprite} = await getPokemonByName(this.pokemon);
      this.sprite = sprite;
      this.id = id;
      this.height = height;
      this.weight = weight;
    },
  }
</script>

<template>
  <div>
    <div class="pokedex-screen">
      <img :src="sprite" :alt="pokemon">
    </div>
    {{ pokemon }}

    <div>
      <p>{{ id }}</p>
      <p>{{ height }}</p>
      <p>{{ weight }}</p>
    </div>
  </div>
</template>
