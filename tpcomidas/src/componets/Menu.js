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

const ListComponent = ({ navigation }) => {
    const { contextState, setContextState } = useContextState();
    const {promedio, setPromedio} = useState(0);


    // useEffect(() => {
    //   calcularPromedio();
    // }, []);

    const renderItem = ({ item, index }) => (
        <PlatoCard item={item} index={index} navigation={navigation}/>
    );

    const Buscador = () => {
      navigation.navigate('buscador')
  }

  const calcularPromedio = () => {
    if (contextState.menu.length === 0) {
      setPromedio(0) 
    }
    setPromedio(contextState.promedioHealthCore / contextState.menu.length)
  };

    return (
        <View>
        {!contextState.loading ? (
          <>
            < SafeAreaView style={ListComponentStyle.container} >
            {contextState.loading && <ActivityIndicator size="large" color="#00ff00" />}
            <FlatList
                    data={contextState.menu}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView >
            
            </>
            ) : (
            <div className="App">
            <h1>Cargando...</h1>
            </div>
            )}
            <Text>
              Precio total: {contextState.precioMenu}
            </Text>
            <Text>
              Promedio del healthScore: {promedio}
            </Text>
            <TouchableOpacity style={styles.loginBtn} onPress={Buscador}>
            <Text style={styles.loginText} >Buscador</Text> 
            </TouchableOpacity>
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

export default ListComponent;