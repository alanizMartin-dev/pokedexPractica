import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function PokemonCard({id, name, image, description}){
    return(
        <View style={styles.pokemonCard}>
            <Image source={{ uri: image }} style={styles.pokemonImage} />
            <View style={styles.numbAndName}>
                <Text style={styles.pokemonIdentification}>{`#${id}`}</Text>
                <Text style={styles.pokemonName}>{name}</Text>
            </View>
            <Text style={styles.pokemonDescription}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pokemonCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    pokemonImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    numbAndName: {
        flexDirection: 'row',
    },
    pokemonIdentification:{
        marginRight: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    pokemonName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textTransform: 'capitalize'
    },
    pokemonDescription: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
  
    },
  })