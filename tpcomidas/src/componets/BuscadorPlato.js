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
import swal from 'sweetalert';
import { BuscadorStyle } from './styles.js';


const ListComponent = ({ navigation }) => {
    const [busqueda, setBusqueda] = useState("");
    const { contextState, setContextState } = useContextState();

    const renderItem = ({ item, index }) => (
        <PlatoCard item={item} index={index} navigation={navigation}/>
    );

    const onPressed = () => {
        setContextState({ newValue: true, type: ActionTypes.setLoading});
        BuscadorPlatos(busqueda).then(response => {
            if(response == 2){
                
                
              
              swal("Oops!", "Tienes que escribir mas de dos caracteres", "error");
                setContextState({ newValue: false, type: ActionTypes.setLoading});
            }
            else if(response == false)
                {
                  swal("Oops!", "No existen platos para ese titulo", "error");
                  setContextState({ newValue: false, type: ActionTypes.setLoading});
                }
            else{
                setContextState({ newValue: response, type: ActionTypes.setPlatos});
                setContextState({ newValue: false, type: ActionTypes.setLoading});
            }
        })
        .catch((error) => {
        
        });
    }
    const Menu = () => {
      navigation.navigate('Tu menu')
  }

    

    return (
      <center>
        <View style={ListComponentStyle.background}>
        {!contextState.loading ? (
          <>
            < SafeAreaView style={BuscadorStyle.scroll}>
            {contextState.loading && <ActivityIndicator size="large" color="#00ff00" />}
            <FlatList
                    data={contextState.platos}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    
                />
            </SafeAreaView >

            <View style={BuscadorStyle.inputView}>
            <TextInput
            style={BuscadorStyle.TextInput}
            placeholder="Busqueda"
            placeholderTextColor="#003f5c"
            onChangeText={(busqueda) => setBusqueda(busqueda)}
            /> 
            </View> 
            
            <TouchableOpacity style={BuscadorStyle.loginBtn} onPress={onPressed}>
            <Text style={BuscadorStyle.loginText} >Buscar</Text> 
            </TouchableOpacity>
            </>
            ) : (
            <div className="App">
            <h1>Cargando...</h1>
            </div>
            )}
            
            <TouchableOpacity style={BuscadorStyle.MenuBTN} onPress={Menu}>
            <Text style={BuscadorStyle.loginText} >Menu</Text> 
            </TouchableOpacity>
      </View>
      </center>
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