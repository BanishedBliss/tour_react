import React, {useState} from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ScreenHeader, CartList, PromocodeInput, CartTotals, Button, ProductsSlider } from "../ui-elements";
import {useNavigation} from "@react-navigation/native";

export default function CartScreen() {
    const title = 'Корзина'
    const [cartItems, setCartItems] = useState(cartData)
    const navigation = useNavigation()
    const link = () => navigation.navigate('order')

    return (
        <View style={ styles.container }>
            <ScrollView style={{ paddingTop: 20 }}>
                <ScreenHeader title={ title } style={ styles.contPadding } goBack/>
                <CartList products={ cartItems } style={ [styles.contPadding, styles.cartList] }/>
                <PromocodeInput style={ [styles.contPadding, styles.promocode] }/>
                <CartTotals amount={ cartItems.length } style={ [styles.contPadding, styles.cartTotals] }/>
                <ProductsSlider title="Недавно просмотренные" products={ visitedLately }/>
                <Button text="Оформить" style={ [styles.contPadding, styles.button] } link={ link }/>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    contPadding: {
        paddingHorizontal: 20,
    },
    cartList: {
        marginTop: 20,
        marginBottom: 12,
    },
    promocode: {
        marginBottom: 20,
    },
    cartTotals: {
        marginBottom: 40,
    },
    button: {
        marginBottom: 40,
    }
})

const cartData = [
    {
        id: 4,
        title: 'Mercedes-Benz GLS AMG GLS 63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: 8000,
        priceCurrency: 'р',
        priceUnit: '/час',
        priceUnitShort: 'ч',
        saleTag: { text: 'Низкая цена', color: '#12DE00'},
        amount: 1,
        total: 8000,
    },
    {
        id: 5,
        title: 'Mercedes-AMG E63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: 10000,
        priceCurrency: 'р',
        priceUnit: '/час',
        priceUnitShort: 'ч',
        saleTag: { text: 'Новинка', color: '#DEA000'},
        amount: 2,
        total: 20000,
    },

]

const visitedLately = [
    {
        id: 2,
        title: 'Mercedes-Benz GLS AMG GLS 63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '8000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: {},
    },
    {
        id: 3,
        title: 'Mercedes-AMG E63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '10000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: { text: 'Хит', color: '#DE0000'},
    },
    {
        id: 4,
        title: 'Mercedes-Benz GLS AMG GLS 63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '8000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: { text: 'Низкая цена', color: '#12DE00'},
    },
    {
        id: 5,
        title: 'Mercedes-AMG E63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '10000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: { text: 'Новинка', color: '#DEA000'},
    },
]
