import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

export default function custom({ item }) {
    return (
        <View style={styles.roundMarker}>
            <Image style={styles.roundImage} source={{ uri: item.markerImag }} />
        </View>
    )
    
}


const styles = StyleSheet.create({
    roundMarker: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 25
    },

    roundImage: {
        height: 50,
        width: 50,
        borderRadius: 25
    }

})