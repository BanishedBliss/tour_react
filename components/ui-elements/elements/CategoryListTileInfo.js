import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategoryListTileInfo({ data, link }) {
    return (
        <View>
            <TouchableOpacity activeOpacity={ 0.75 } onPress={ link }>
                <Text style={ styles.title }>{ data.title }</Text>
            </TouchableOpacity>
            <Text style={ styles.price }>{ data.priceValue } { data.priceCurrency }{ data.priceUnit }</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    title: {
        color: '#444444',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 2,
    },
    price: {
        color: '#989898',
    },
})
