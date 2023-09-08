import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getMoviesById } from '../../services/omdbService';
import { ListChildStyle } from './styles';

const DetallePlato = ({ item, pressed, setPressed, index }) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => { setMovie(null) }, [pressed])

    const onViewPressed = () => {
        setLoading(true);
        
    }

    return (
        <TouchableOpacity onPress={onViewPressed}>
            {loading}
            < View style={[ListChildStyle.item, { backgroundColor: pressed === index ? '#00ffff' : '#ececec' }]} >
                <Image
                    style={ListChildStyle.tinyLogo}
                    source={{
                    uri: item.Poster,
                    }}
                />
                <Text style={ListChildStyle.title}>{item.Title}</Text>
                {movie && pressed === index && <View style={[ListChildStyle.item, { backgroundColor: pressed === index ? '#00ffff' : '#ececec' }]}>
                    <Text>
                        {movie.Country}
                    </Text>
                </View>}
            </View >
        </TouchableOpacity >
    );
};

export default DetallePlato;