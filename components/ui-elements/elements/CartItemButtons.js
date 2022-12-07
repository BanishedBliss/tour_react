import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { indentPriceTrait as indentPrice } from "../../traits/indentPriceTrait";

export default function CartItemButtons({ data }) {
    return (
        <View style={ styles.container }>
            <Text style={ styles.total }>{ indentPrice(data.total) } { data.priceCurrency }</Text>
            <View style={ styles.buttonContainer }>

                <TouchableOpacity style={ styles.button } activeOpacity={0.5}>
                    <Text style={ styles.buttonText }>-</Text>
                </TouchableOpacity>

                <Text style={ styles.amount }>{ data.amount }{ data.priceUnitShort }</Text>

                <TouchableOpacity style={ styles.button } activeOpacity={0.5}>
                    <Text style={ styles.buttonText }>+</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: 22,
        height: 22,
        backgroundColor: '#0080DE',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 23.57,
        fontFamily: 'Poppins-Regular',
        marginTop: -6,
        paddingLeft: 0.5,
        textAlign: 'center',
    },
    total: {
        marginTop: -1,
        color: '#0080DE',
        fontSize: 14,
        fontFamily: 'Raleway-Medium',
    },
    amount: {
        color: '#5B5B5B',
        paddingHorizontal: 10,
        fontSize: 15,
        fontFamily: 'Raleway-Medium',
    }
})
