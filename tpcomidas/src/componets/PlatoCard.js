import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ListChildStyle } from './styles';

const PlatoCard = ({ item, index }) => {


    return (
        <TouchableOpacity>
            < View style={[ListChildStyle.item]} >
                <Image
                    style={ListChildStyle.tinyLogo}
                    source={{
                    uri: item.image,
                    }}
                />
                <Text style={ListChildStyle.title}>{item.title}</Text>
            
            </View >
        </TouchableOpacity >
    );
};

export default PlatoCard;


