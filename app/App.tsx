import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Button} from "./components";
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>测试2</Text>
        <Button text="测试按钮" />
        <StatusBar style="auto"/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
