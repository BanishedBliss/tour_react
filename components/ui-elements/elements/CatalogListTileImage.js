import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CatalogListTileImage({ data, link }) {
    return (
        <TouchableOpacity style={ styles.imageContainer } activeOpacity={ 0.8 } onPress={ link }>
            <Image source={{ uri: data.image }} style={ styles.image }/>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        width: '47%',
        height: undefined,
        flexShrink: 0,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.4363,
    },
})
