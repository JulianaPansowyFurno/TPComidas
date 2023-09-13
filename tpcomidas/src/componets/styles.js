import { StyleSheet, StatusBar } from 'react-native';

export const ListComponentStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0000ff",
        marginTop: StatusBar.currentHeight || 0,
    },
});


export const ListChildStyle = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        marginLeft: 16,
        marginLeft: 16
        
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
});
