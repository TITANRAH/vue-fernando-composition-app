import pokemonApi from "../api/pokemonApi";
import type { Pokemon, PokemonListResponse,  } from "../interfaces";

export const getPokemons = async(): Promise<Pokemon[]> => {

   const {data} = await  pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

//    for(const {url} of data.results ){

    
//    }

    return [];
}