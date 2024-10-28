import React, {useEffect, useState} from "react";
import { FlatList, View, Image } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokemonCard } from "./PokemonCard";
import { Activity } from "./Activity";

export function Main() {
    const [listaPokemon, setListaPokemon] = useState([])
    const insets = useSafeAreaInsets();

    const fetchLista = async()=>{
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        if(!response.ok){
          throw new Error(`Error HTTP: ${response.status}`)
        }   
        const data = await response.json()
        const pokemons = data.results;
        const listaDetallada = await Promise.all(
          pokemons.map(async (pokemon)=>{
            const pokemonRes = await fetch(pokemon.url)
            if(!pokemonRes.ok){
              throw new Error(`Error HTTP: ${pokemonRes.status}`)
            }
            const pokeInfo = await pokemonRes.json()
            const speciesRes = await fetch(pokeInfo.species.url)
            if(!speciesRes.ok){
              throw new Error(`Error HTTP: ${speciesRes.status}`)
            }
            const pokeSpecies = await speciesRes.json()

            return{
              id: pokeInfo.id,
              name: pokeInfo.name,
              description: pokeSpecies.flavor_text_entries.find((d)=>d.language.name==="es")?.flavor_text.replace(/\n/g, " ") || "Descripción no disponible.",
              image: pokeInfo.sprites.front_default
            }
          })
        )
        setListaPokemon(listaDetallada)
      } catch (error) {
        console.error("Error en el fetch.")
      }
    }
    useEffect(()=>{
      fetchLista()
    },[])
    
    return (
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom}}>
        {listaPokemon.length === 0 ? (
          <Activity/>
        ):(
        <FlatList
          data={listaPokemon}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PokemonCard
              id = {item.id}
              name = {item.name}
              image = {item.image}
              description = {item.description}
            />
          )}
        />)}
      </View>
    )
}