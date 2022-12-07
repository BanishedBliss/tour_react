import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategoryListTileButtons({ inCart, inFavourite }) {
    return (
        <View style={ styles.buttonContainer }>
            <TouchableOpacity style={ styles.button } activeOpacity={ 0.8 }>
                <Text style={ styles.buttonText }>Купить</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={ 0.2 }>
                <Image source={ setIcon(inFavourite) } style={ styles.fav }/>
            </TouchableOpacity>
        </View>
    )
}



function setIcon(inFavourites) {
    return inFavourites ?
        require('../../img/favourite.png') :
        require('../../img/favourite-none.png')
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        height: 35,
        backgroundColor: '#0080DE',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    fav: {
        width: 24,
        marginRight: 6,
    }
})
