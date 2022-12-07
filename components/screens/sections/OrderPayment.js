import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInputField } from "../../ui-elements";
import { indentPriceTrait as indentPrice } from "../../traits/indentPriceTrait";

export default function OrderPayment({ view, updateView }) {
    return (
        <View>
            <TextInputField label="Номер карты"
                            value={ view.cardNumber }
                            changeText={ updateView('payment', 'cardNumber') }
                            placeholder="XXXX XXXX XXXX XXXX"/>

            <TextInputField label="Срок действия"
                            value={ view.expiryDate }
                            changeText={ updateView('payment', 'expiryDate') }
                            placeholder="ММ/ГГ"/>

            <TextInputField label="CVV-код"
                            value={ view.cvv }
                            changeText={ updateView('payment', 'cvv') }/>

            <View style={ styles.totals }>
                <Text style={ styles.totalsText }>Сумма к оплате:</Text>
                <Text style={ styles.totalsText }>{ indentPrice(view.priceValue) } { view.priceCurrency }</Text>
            </View>
            <Button text="Оплатить"/>
        </View>
    )
}



const styles = StyleSheet.create({
    totals: {
        marginTop: 40,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalsText: {
        color: '#0080DE',
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
    }
})
