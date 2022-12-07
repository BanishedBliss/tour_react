import React from "react";
import { StyleSheet, View } from "react-native";
import CartItem from "./tiles/CartItem";

export default function CartList({ products, style }) {

    return (
        <View style={ [styles.container, style] }>
            { products.map((product) => (
                <CartItem key={ product.id } product={ product }/>
            )) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
})

