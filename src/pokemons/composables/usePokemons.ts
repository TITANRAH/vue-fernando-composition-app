import { ref, computed } from "vue"
import { getPokemons } from "../helpers/get-pokemons"
import type { Pokemon } from "../interfaces"


const usePokemons = () => {

    const pokemons = ref<Pokemon[]>([])
    const isLoading = ref(true)

    getPokemons().then((resp) => {
        pokemons.value = resp;
        isLoading.value = false;
    }
    );

    const count = computed(() => {
        return pokemons.value.length
    })


    return {
        pokemons,
        isLoading,
        count
    }
}