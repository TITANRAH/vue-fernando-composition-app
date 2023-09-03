<script setup lang="ts">

import pokemonApi from '../api/pokemonApi';
import type {PokemonListResponse} from '../interfaces/pokemons-list.response'
import { getPokemons } from '../helpers/get-pokemons';
import { ref } from 'vue';
import type { Pokemon } from '../interfaces/pokemon';

// #suspense
// const data = await getPokemons()
// const pokemons = ref<Pokemon[]>([])

// getPokemons().then((resp) => {
//   pokemons.value = resp
// })

</script>
<template>
  <div>

    <h1>Pokemon List</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}

      </li>
    </ul>
  </div>
</template>
<!-- 
*SUSPENSE 

SI HAGO UN LLAMADO HTTP POR EJEM UN GET 

PARA USAR SUSPENSE ENCIERRO EL ROUTERVEIW DENTRO DE UNA ETIQUIETA SUSPNESE -->