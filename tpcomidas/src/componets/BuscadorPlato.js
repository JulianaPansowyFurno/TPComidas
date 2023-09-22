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
    const [busqueda, setBusqueda] = useState("");
    const { contextState, setContextState } = useContextState();

    const renderItem = ({ item, index }) => (
        <PlatoCard item={item} index={index} navigation={navigation}/>
    );

    const onPressed = () => {
        setContextState({ newValue: true, type: ActionTypes.setLoading});
        BuscadorPlatos(busqueda).then(response => {
            if(response == false){
                alert("Tienes que escribir mas de dos caracteres");
                setContextState({ newValue: false, type: ActionTypes.setLoading});
            }
            else{
                setContextState({ newValue: response, type: ActionTypes.setPlatos});
                setContextState({ newValue: false, type: ActionTypes.setLoading});
            }
        })
        .catch((error) => {
  
            console.log(error);

        });
    }

    return (
        <View>
        {!contextState.loading ? (
          <>
            < SafeAreaView style={ListComponentStyle.container} >
            {contextState.loading && <ActivityIndicator size="large" color="#00ff00" />}
            <FlatList
                    data={contextState.platos}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView >

            <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Busqueda"
            placeholderTextColor="#003f5c"
            onChangeText={(busqueda) => setBusqueda(busqueda)}
            /> 
            </View> 
            
            <TouchableOpacity style={styles.loginBtn} onPress={onPressed}>
            <Text style={styles.loginText} >Buscar</Text> 
            </TouchableOpacity>
            </>
            ) : (
            <div className="App">
            <h1>Cargando...</h1>
            </div>
            )}
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