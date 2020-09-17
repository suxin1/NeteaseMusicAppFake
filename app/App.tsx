import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {Find} from "./screen";
import {Personal} from "./screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="find">
        <Stack.Screen name="personal" component={Personal}/>
        <Stack.Screen name="find" component={Find}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

