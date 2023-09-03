import { ref, computed, onMounted } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

// cambiamos el scope a global
// sacandolas de dentro del composable
const pokemons = ref<Pokemon[]>([])
const isLoading = ref(true)

export const usePokemons = () => {

    onMounted(async()=>{
        await loadPokemons();
    })

//   if (pokemons.value.length === 0) {
//     getPokemons().then((resp) => {
//       pokemons.value = resp
//       isLoading.value = false
//     })
//   }

    const loadPokemons = async () => {
        const data = await getPokemons();
        pokemons.value = data;
        isLoading.value= false;
    }

  const count = computed(() => {
    return pokemons.value.length
  })

  return {
    pokemons,
    isLoading,
    count
  }
}
