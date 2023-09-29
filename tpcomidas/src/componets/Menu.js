import { useEffect, useState } from "react";
import {
    SafeAreaView,
    FlatList,
    ActivityIndicator,
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
import { ListComponentStyle } from "./styles";
import { useContextState, ActionTypes } from "../../contextState";
import  {BuscadorPlatos}  from '../services/ApiService';
import PlatoCard from "./PlatoCard";

const Menu = ({ navigation, promedio }) => {
  

    return (
        <View>
        
</View>
   )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });

export default Menu;