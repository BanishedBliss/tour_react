import React, {useState} from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenHeader } from "../ui-elements";
import OrderInfo from "./sections/OrderInfo";
import OrderPayment from "./sections/OrderPayment";

const title = 'Оформление'

export default function OrderScreen() {
    const [viewData, setViewData] = useState({
        'info': { firstName: '', lastName: '', phone: '', email: '', renderComponent: OrderInfo },
        'payment': { cardNumber: '', expiryDate: '', cvv: '', priceValue: 30000, priceCurrency: 'р', renderComponent: OrderPayment }
    })

    const [activeView, setActiveView] = useState('info')

    const changeView = (viewKey) => {
        if (activeView === viewKey) return null
        setActiveView(viewKey)
    }

    const updateView = (view, key) => (value) => {
        setViewData(oldData => ({
            ...oldData,
            [view]: {
                ...oldData[view],
                [key]: value
            },
        }))
    }

    return (
        <ScrollView style={ styles.container }>
            <ScreenHeader title={ title } goBack/>
            <View style={ styles.tabs }>
                <Text onPress={ () => changeView('info') }
                      style={ [styles.tabText, (activeView !== 'info') && styles.inactiveTab] }>
                    Инфо
                </Text>
                <Text style={ styles.tabText }> / </Text>
                <Text onPress={ () => changeView('payment') }
                      style={ [styles.tabText, (activeView !== 'payment') && styles.inactiveTab] }>
                    Оплата
                </Text>
            </View>

            { viewData[activeView].renderComponent( { view: viewData[activeView], updateView: updateView} ) }

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 32,
    },
    tabText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: '#5B5B5B',
    },
    inactiveTab: {
        color: '#0080DE',
        textDecorationLine: 'underline',
    },
})
