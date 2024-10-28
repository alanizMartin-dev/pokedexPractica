import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from 'react-native';
import { Main } from "./Components/main";

export default function App() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Main/>
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
})
