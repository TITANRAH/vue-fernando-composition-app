<script setup lang="ts">
import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons'
const { count, isLoading, pokemons, isError, error } = usePokemons()
</script>
<template>
  <h1 v-if="isLoading">Loading...</h1>

  <div v-else-if="isError">
    {{ error }}
  </div>
  <div v-else>
    <h1>Pokemon List - {{ count }}</h1>

    <!-- si no pongo ?? [] dara error no deberia por que estoy previniendo con un error 
    pero hay que oponerlo -->
      <PokemonCardList
        :pokemons="pokemons ?? []"
      />
  </div>
</template>
<!-- 
*SUSPENSE 

SI HAGO UN LLAMADO HTTP POR EJEM UN GET 

PARA USAR SUSPENSE ENCIERRO EL ROUTERVEIW DENTRO DE UNA ETIQUIETA SUSPNESE -->
