import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from 'react-native';
import Login from './src/componets/Login';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import BuscadorPlato from "./src/componets/BuscadorPlato";
import DetallePlato from "./src/componets/DetallePlato";
import { ContextProvider } from "./contextState";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from "./src/componets/Menu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      
      <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="buscador" component={BuscadorPlato} />
        <Stack.Screen name="detalle" component={DetallePlato} />
        <Stack.Screen name="menu" component={Menu} />
      </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});