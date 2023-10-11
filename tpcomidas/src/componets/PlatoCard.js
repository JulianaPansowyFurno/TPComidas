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
import { PlatoStyle } from './styles.js';

const PlatoCard = ({navigation, item, index }) => {

    const onPressed = (id) => {
      navigation.navigate('Detalles del plato', {id})
    }
   

    return (
      
      <div style={ListComponentStyle.card}>
            < View >
                <Image
                    style={PlatoStyle.tinyLogo}
                    source={{
                    uri: item.image
                    }} 
                />
                <Text style={PlatoStyle.title}>{item.title}</Text>
              <TouchableOpacity style={PlatoStyle.loginBtn} onPress={() =>onPressed(item.id)}>
                <Text  > Detalle del plato </Text> 
            </TouchableOpacity>
            </View>
        </div>
    );
};
export default PlatoCard;


