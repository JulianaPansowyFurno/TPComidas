import { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, ActivityIndicator } from "react-native";
import { platosBD } from "../services/ApiService";
import { ListComponentStyle } from "./styles";
import PlatoCard from './PlatoCard';

const ListComponent = ({ search }) => {
    const [loading, setLoading] = useState(false);
    const [platos, setPlatos] = useState([]);

    const renderItem = ({ item, index }) => (
        <PlatoCard item={item} index={index}/>
    );

    useEffect(() => {
        setLoading(true);
        BuscadorPlatos().then(response => {setPlatos(response);})
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
        return;
    }, [])

    console.log(platos)

    return (< SafeAreaView style={ListComponentStyle.container} >
    {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <FlatList
            data={platos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView >
   )
}

export default ListComponent;