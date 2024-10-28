import React from "react";
import { ActivityIndicator, View } from "react-native";

export function Activity(){
    return(
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator color={'blue'} size={'large'}/>
        </View>
    )
}