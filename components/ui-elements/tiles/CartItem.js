import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import {
    CartItemButtons as TileButtons,
    CategoryListTileImage as TileImage,
    CategoryListTileInfo as TileInfo,
    SaleTag as TileTag
} from "../elements";


export default function CartItem({ product, style }) {
    const navigation = useNavigation()
    const link = () => navigation.navigate('catalog-details', product)

    return (
        <View style={ [styles.tile, style] }>
            <TileTag tag={ product.saleTag } style={ styles.tag } />
            <TileImage data={ product } link={ link }/>
            <View style={ styles.info }>
                <TileInfo data={ product } link={ link }/>
                <TileButtons data={ product } link={ link }/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    tile: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
        flexWrap: 'nowrap',
    },
    info: {
        width: '100%',
        flexShrink: 1,
        flexWrap: 'nowrap',
        paddingLeft: 19,
        justifyContent: 'space-between',
    },
    tag: {
        position: 'absolute',
        left: 0,
        top: -5,
        zIndex: 2,
    },
})
