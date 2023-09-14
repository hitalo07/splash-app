import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export function Home () {

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111'
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>Top App</Text>
      <StatusBar style="light" />
    </View>
  )
}