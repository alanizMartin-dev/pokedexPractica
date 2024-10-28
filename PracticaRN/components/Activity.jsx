import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export function Activity(){
    return(
        <View style={styles.contenedor}>
            <ActivityIndicator color={'blue'} size={'large'}/>
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow',
    },
  });