import {
    FlatList,
    ActivityIndicator,
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
import { ListChildStyle } from './styles';
import { useContextState, ActionTypes } from "../../contextState";
import  {useNavigate}  from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import  {Platos}  from '../services/ApiService';
import { Routes, Route, useParams } from 'react-router-dom';


const DetallePlato = ({ route }) => {
    const { contextState, setContextState } = useContextState();
    const [plato, setPlato] = useState([]);
    const [filtered, setfiltered] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [veganos, setVeganos] = useState(false);


    useEffect(() => {
      Platos(route.params.id)
      .then(response => {
        setIsLoading(false);
        setPlato(response);
      })
      .catch(error => {      
        setIsLoading(true);
        alert("mesi");
      });
      setfiltered(contextState.menu.filter(p => {
        return p.id === route.params.id;
      }))
      setVeganos(contextState.menu.filter(p => {
        return p.id === plato.vegan;
      }))
    }, []);

    

    const onPressed = () => {
    setContextState({ newValue: plato, type: ActionTypes.setMenu});
    setfiltered([plato])
    if(contextState.menu.length >= 4 )
    {
      alert("No debes tener mas de 4 platos en tu menu")
    }
    else if(veganos != 2)
    {
      alert("nooooo")
    }
  }


  console.log(contextState.menu.filter(p => 
     p.id === route.params.id
  ));

    return (
            < View >
                <Image
                    style={ListChildStyle.tinyLogo}
                    source={{
                    uri: plato.image
                    }}
                />
                <Text style={ListChildStyle.title}>{plato.title}</Text>
                <Text style={ListChildStyle.title}>Precio de la porcion: {plato.pricePerServing}</Text>
                <Text style={ListChildStyle.title}>¿Es vegano?:  {plato.vegan ? "Si": "No"}</Text>
               

                
                {!filtered?.[0] ? (
                    <TouchableOpacity style={styles.loginBtn} onPress={() =>onPressed(plato)}>
                      <Text style={styles.loginText} > Agregara al menu</Text> 
                  </TouchableOpacity> 
                ) : (
                   <Text style={styles.loginBtn} > Ya esta agregado al menu </Text> 
                )}
            </View >
    );
};
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
export default DetallePlato;


