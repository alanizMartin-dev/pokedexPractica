import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, View, Image } from 'react-native';

export default function Pokedex() {
    const [listaPokemon, setListaPokemon] = useState([])


    const fetchLista = async()=>{
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
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
    
    console.log(listaPokemon)

    return (
      <SafeAreaView style={styles.container}>
          <FlatList
              data={listaPokemon}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.pokemonCard}>
                    <Image source={{ uri: item.image }} style={styles.pokemonImage} />
                    <Text style={styles.pokemonName}>{item.name}</Text>
                    <Text style={styles.pokemonDescription}>{item.description}</Text>
                </View>
              )}
          />
          <StatusBar style="auto" />
        </SafeAreaView>
    )
}
