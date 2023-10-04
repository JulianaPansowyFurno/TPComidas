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
import  {BuscadorPlatos, Platos}  from '../services/ApiService';
import { Routes, Route, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import  BuscaPlatos  from "../componets/BuscadorPlato";


const DetallePlato = ({ route, navigation }) => {
    const { contextState, setContextState } = useContextState();
    const [plato, setPlato] = useState([]);
    const [filtered, setfiltered] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


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
      
    }, []);

    const onAgregar = () => {
    if(contextState.menu.length >= 4)
    {
      swal("Oops!", "No debes tener mas de 4 platos en tu menu", "error");
    }
    else{
      if(plato.vegan && contextState.contVeg < 2)
      {
        setContextState({ newValue: plato, type: ActionTypes.setMenu});
        setContextState({ newValue: contextState.contVeg += 1, type: ActionTypes.setVeganCount});
        setContextState({ newValue: contextState.precioMenu += plato.pricePerServing, type: ActionTypes.setPrecioMenu});
        setContextState({ newValue: contextState.healthScore += plato.healthScore, type: ActionTypes.setPromedioHealthCore});
        swal("¡Bien!", "Plato agregado al menú", "success"); 
      }
     else if (!plato.vegan && contextState.contNotVeg < 2) {
        setContextState({ newValue: plato, type: ActionTypes.setMenu });
        setContextState({ newValue: contextState.contNotVeg += 1, type: ActionTypes.setNotVeganCount});
        setContextState({ newValue: contextState.precioMenu += plato.pricePerServing, type: ActionTypes.setPrecioMenu});
        setContextState({ newValue: contextState.healthScore += plato.healthScore, type: ActionTypes.setPromedioHealthCore});

        setfiltered([...filtered, { ...plato }]);
        swal("¡Bien!", "Plato agregado al menú", "success"); 
      }  else {
        swal("Oops!", "Solo puedes agregar 2 platos veganos y 2 platos no veganos", "error");              
      }
    }
  }



  const onEliminado = () => {
    setContextState({ newValue: plato.id, type: ActionTypes.removeMenu});
    setfiltered([]);
    if(plato.vegan) {
      setContextState({ newValue: contextState.contVeg - 1, type: ActionTypes.setVeganCount});
      setContextState({ newValue: contextState.precioMenu - plato.pricePerServing, type: ActionTypes.setPrecioMenu});
      setContextState({ newValue: contextState.healthScore - plato.healthScore, type: ActionTypes.setPromedioHealthCore});

    } else {
      setContextState({ newValue: contextState.contNotVeg - 1, type: ActionTypes.setNotVeganCount});
      setContextState({ newValue: contextState.precioMenu - plato.pricePerServing, type: ActionTypes.setPrecioMenu});
      setContextState({ newValue: contextState.healthScore - plato.healthScore, type: ActionTypes.setPromedioHealthCore});

    }
    swal("Bien!", "Se elimino el plato del menu correctamente", "success");
    }

   

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
                    <TouchableOpacity style={styles.loginBtn} onPress={() =>onAgregar(plato)}>
                      <Text style={styles.loginText} > Agregara al menu</Text> 
                  </TouchableOpacity> 
                ) : (
                   <TouchableOpacity style={styles.loginBtn} onPress={() =>onEliminado(plato)}>
                      <Text style={styles.loginText} > Eliminar del menu</Text> 
                  </TouchableOpacity> 
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


