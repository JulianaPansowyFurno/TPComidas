import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from 'react-native';
import Login from './src/componets/Login';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Plato from "./src/componets/BuscadorPlato";
import PlatoCard from "./src/componets/PlatoCard";

export default function App() {
  return (
      <View style={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}> </Route>
            <Route path="/plato" element={<Plato />}> </Route>
            <Route path="/detalle" element={<PlatoCard />}> </Route>
          </Routes>
        </BrowserRouter>
  </View> 
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