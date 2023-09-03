import axios from "axios";
import pokemonApi from "../api/pokemonApi";
import type { Pokemon, PokemonListResponse, PokemonResponse  } from "../interfaces";
// import { sleep } from "./sleep";

export const getPokemons = async(): Promise<Pokemon[]> => {

   //  await sleep(8)
    // hago la primera peticion y me trae una lista de 45 pokemones
   const {data} = await  pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

//    creo una varible un arreglo vacio tipo Promise tipo pokemon
   const pokemonPromises: Promise<Pokemon>[] = []

//    extrae la url que viene en el result de la data
   for(const {url} of data.results ){

    // saco la data necesaria para mi modelo personalizado de pokemon
   const pokemonPromise = axios.get<PokemonResponse>(url).then(({data})=>{
        return {
            id: data.id,
            name: data.name,
            frontSprite: data.sprites.front_default,
        }
    })

    // hago un push al arreglo 
    pokemonPromises.push(pokemonPromise)
    
   }

//    hago que se cumpla la promesa
    
    const pokemons = await Promise.all(pokemonPromises)

    return pokemons;

}