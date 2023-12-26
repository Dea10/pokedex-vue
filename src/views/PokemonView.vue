<script>
import { getPokemonByName } from "@/helpers/getPokemonByName";

export default {
  data() {
    return {
      id: "",
      height: "",
      weight: "",
      spriteUrl: "",
    };
  },
  computed: {
    pokemon() {
      return this.$route.params.pokemon;
    },
  },
  async mounted() {
    const { id, height, weight, sprite } = await getPokemonByName(this.pokemon);
    this.sprite = sprite;
    this.id = id;
    this.height = height;
    this.weight = weight;
  },
};
</script>

<template>
  <div class="pokemon-card">
    <div class="image-container">
      <img :src="sprite" :alt="pokemon" />
      <small>{{ `${id}: ${pokemon}` }}</small>
    </div>
    <hr />
    <div class="stats-container">
      <small>{{ `height: ${height}` }}</small>
      <small>{{ `weight: ${weight}` }}</small>
    </div>
  </div>
</template>

<style>
.pokemon-card {
  border: 1px solid yellow;
  border-radius: 8px;
  width: fit-content;
  margin: 16px;
  padding: 4px;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
