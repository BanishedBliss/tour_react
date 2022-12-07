import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CartTotals({ amount, style }) {

    return (
        <View style={ [styles.cartTotals, style] }>
            <View style={ styles.textRow }>
                <Text style={ styles.totalAmountText }>Количество товаров:</Text>
                <Text style={ styles.totalAmountText }>{ amount }</Text>
            </View>
            <View style={ styles.textRow }>
                <Text style={ styles.totalPriceText }>Итого:</Text>
                <Text style={ styles.totalPriceText }>30 000р</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    cartTotals: {
        flexDirection: 'column',
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    totalAmountText: {
        color: '#5B5B5B',
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
    totalPriceText: {
        color: '#0080DE',
        fontSize: 20,
        fontFamily: 'Raleway-Bold',
    }
})

