import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, } from 'react-native';
import { Main } from "./Components/main";

export function App() {
    return (
      <SafeAreaProvider>
        <View className="flex-1 bg-gray-100 items-center">
          <Main/>
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    )
}
