import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from 'react-native';
import Login from './src/componets/Login';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./src/componets/Home.js";

export default function App() {
  return (
      <View style={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}> </Route>
            <Route path="/home" element={<Home />}> </Route>
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