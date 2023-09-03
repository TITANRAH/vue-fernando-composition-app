<script setup lang="ts">
import type { Pokemon } from '../interfaces'
import PokemonCard from './PokemonCard.vue'

// para defineprops primero declaro la interface
interface Props {
  pokemons: Pokemon[]
}

// luego las props
defineProps<Props>()
</script>

<template>
  <div class="card-list">
    <PokemonCard 
        v-for="pokemon of $props.pokemons" 
        :key="pokemon.id" 
        :pokemon="pokemon" 
    />
  </div>
</template>

<style>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
