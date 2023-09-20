import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
import { ListChildStyle } from './styles';
import { useContextState, ActionTypes } from "../../contextState";
import  {useNavigate}  from 'react-router-dom';
import DetallePlato from "./DetallePlato";

const PlatoCard = ({ item, index }) => {
    const navigate = useNavigate();


    const onPressed = (id) => {
      navigate("/detalle", {id});
    }

    
    return (
        <TouchableOpacity>
            < View style={[ListChildStyle.item]} >
                <Image
                    style={ListChildStyle.tinyLogo}
                    source={{
                    uri: item.image
                    }}
                />
                <Text style={ListChildStyle.title}>{item.title}</Text>
                 <TouchableOpacity style={styles.loginBtn} onPress={() =>onPressed(item.id)}>
                <Text style={styles.loginText} > Detalle del plato</Text> 
            </TouchableOpacity> 

            </View >
        </TouchableOpacity >
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
export default PlatoCard;


