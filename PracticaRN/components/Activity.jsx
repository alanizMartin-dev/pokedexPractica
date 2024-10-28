import React from "react";
import { ActivityIndicator, StyleSheet, View, Image } from "react-native";

export function Activity(){
    return(
        <View styles={styles.container}>
            <Image></Image>
            <ActivityIndicator color={'blue'} size={'large'}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow',
    },
  });