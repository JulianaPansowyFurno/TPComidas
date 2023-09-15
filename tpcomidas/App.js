import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from 'react-native';
import Login from './src/componets/Login';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PlatoCard from "./src/componets/PlatoCard";
import BuscadorPlato from "./src/componets/BuscadorPlato";
import { ContextProvider } from "./contextState";

export default function App() {
  return (
    <ContextProvider>
      <View style={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}> </Route>
            <Route path="/detalle" element={<PlatoCard />}> </Route>
            <Route path="/buscador" element={<BuscadorPlato />}> </Route>
          </Routes>
        </BrowserRouter>
  </View> 
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