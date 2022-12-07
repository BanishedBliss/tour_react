import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { indentPriceTrait as indentPrice } from "../../traits/indentPriceTrait";

export default function CategoryListTileInfo({ data, link, type = 'full' }) {
    const styles = setStyles(type)

    return (
        <View style={ styles.container }>
            <TouchableOpacity activeOpacity={ 0.75 } onPress={ link } style={ styles.textContainer }>
                <Text style={ styles.title }>{ data.title }</Text>
            </TouchableOpacity>
            <Text style={ styles.price }>{ indentPrice(data.priceValue) } { data.priceCurrency }{ data.priceUnit }</Text>
        </View>
    )
}



function setStyles(type) {
    const smallStyles = type === 'small' ?
        {
            flexDirection: 'row',
            flexBasis: '100%',
        } : {}

    const smallContainerStyles = type === 'small' ?
        {
            paddingVertical: 4,
        }: {}

    return StyleSheet.create({
        container: {
            ...smallContainerStyles,
        },
        textContainer: {
            ...smallStyles,
        },
        title: {
            ...smallStyles,
            color: '#444',
            fontSize: 14,
            fontFamily: 'Raleway-Bold',
            marginTop: 4,
        },
        price: {
            color: '#989898',
            fontFamily: 'Raleway-Medium',
        },
    })
}
