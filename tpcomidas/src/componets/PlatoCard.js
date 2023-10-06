import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
import { ListChildStyle } from './styles';
import { useContextState, ActionTypes } from "../../contextState";
import { ListComponentStyle } from './styles.js';

const PlatoCard = ({navigation, item, index }) => {

    const onPressed = (id) => {
      navigation.navigate('Detalles del plato', {id})
    }
   

    return (
      
      <div style={ListComponentStyle.card}>
            < View >
                <Image
                    style={ListChildStyle.tinyLogo}
                    source={{
                    uri: item.image
                    }} 
                />
                <Text style={ListChildStyle.title}>{item.title}</Text>
              <TouchableOpacity style={styles.loginBtn} onPress={() =>onPressed(item.id)}>
                <Text style={styles.loginText} > Detalle del plato </Text> 
            </TouchableOpacity>
            </View>
        </div>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      
    },
    image: {
      marginBottom: 40,
    },
    loginBtn: {
      width: "20%",
      borderRadius: 15,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#D0E7D2",
    },
  });
export default PlatoCard;


