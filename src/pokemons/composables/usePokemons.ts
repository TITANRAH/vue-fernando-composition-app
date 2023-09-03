import { computed,  } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'



export const usePokemons = () => {


// Ventakas de tanstack :

// todo esta en cache , 
// todo esta revalidado, 
// cache offline,
// usa reconexiones 
    
const {isLoading, data:pokemons, isError,error  } = useQuery(
  // etiqueta o tag para identificar el cache por si lo vuelvo a usar 
  // sirve para matenenr en cache la data, 
  ['pokemons'],
  getPokemons
)

//     onMounted(async()=>{
//         await loadPokemons();
//     })

const count = computed(()=> pokemons.value?.length ?? 0)

  return {
    pokemons,
    isLoading,
    count,
    isError,
    error
  }
}
