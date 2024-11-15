import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { indentPriceTrait as indentPrice } from "../traits/indentPriceTrait";
import { useNavigation } from "@react-navigation/native";

export default function ProductInfo({ info }) {
    const navigation = useNavigation()
    const link = () => navigation.navigate('cart', info.id )

    return (
        <View style={ styles.mainInfo }>
            <Text style={ styles.title }>{ info.title }</Text>
            <Text style={ styles.greyText }>{ indentPrice(info.priceValue) } { info.priceCurrency }{ info.priceUnit }</Text>
            <Text style={ styles.descriptionHeading }>Описание:</Text>
            <Text style={ [styles.greyText, styles.description] }>{ info.description }</Text>
            <Button text="В корзину" style={ styles.button } link={ link } />
        </View>
    )
}



const styles = StyleSheet.create({
    mainInfo: {
        paddingHorizontal: 20,
        paddingTop: 28,
        paddingBottom: 40,
    },
    title: {
        color: '#444',
        fontSize: 20,
        fontFamily: 'Raleway-Bold',
        marginBottom: 2,
    },
    greyText: {
        color: '#989898',
        fontSize: 14,
        fontFamily: 'Raleway-Medium',
    },
    descriptionHeading: {
        marginTop: 16,
        marginBottom: 2,
        color: '#0080DE',
        fontSize: 14,
        fontFamily: 'Raleway-SemiBold'
    },
    description: {
        marginBottom: 30,
    },
})
