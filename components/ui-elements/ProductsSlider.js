import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CatalogListTile from "./tiles/CatalogListTile";

export default function ProductsSlider({ title, products, style }) {
    return (
        <View style={ [styles.container, style] }>
            <Text style={ styles.title }>{ title }</Text>
            <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } style={ styles.scrollContainer }>
                { products.map((product) => (
                    <CatalogListTile key={ product.id } data={ product } type="small" />
                )) }
                <View style={{width:20}}></View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
    title: {
        color: '#444',
        fontSize: 14,
        fontFamily: 'Raleway-Bold',
        marginBottom: 12,
        marginHorizontal: 20,
    },
    scrollContainer: {
        paddingHorizontal: 20,
    }
})
