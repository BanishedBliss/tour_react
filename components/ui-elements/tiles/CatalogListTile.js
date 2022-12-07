import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoryListTileImage as TileImage,
         CategoryListTileInfo as TileInfo,
         CategoryListTileButtons as TileButtons,
         SaleTag as TileTag } from "../elements";

export default function CategoryListTile({ data, type = 'full' }) {
    const navigation = useNavigation()
    const styles = setStyles(type)
    const link = () => navigation.navigate('catalog-details', data)

    return (
        <View style={ styles.tile }>
            <TileTag tag={ data.saleTag } style={ styles.tag } />
            <TileImage data={ data } type={ type } link={ link }/>
            <View style={ styles.info }>
                <TileInfo data={ data } type={ type } link={ link }/>
                <TileButtons data={ data } link={ link }/>
            </View>
        </View>
    )
}



function setStyles(type) {
    const tileStyles = type === 'full' ?
        {
            width: '100%',
            flexDirection: 'row',
        }
        :
        {
            flexDirection: 'column',
            marginTop: 8,
            paddingBottom: 8,
            width: 180,
            marginRight: 20,
        }

    const infoStyles = type === 'full' ?
        {
            width: '100%',
            flexShrink: 1,
            flexWrap: 'nowrap',
            paddingLeft: 19,
        }
        :
        {
            flexGrow: 1,
        }

    return StyleSheet.create({
        tile: {
            ...tileStyles,
            marginBottom: 20,
            flexWrap: 'nowrap',
        },
        info: {
            ...infoStyles,
            justifyContent: 'space-between',
        },
        tag: {
            position: 'absolute',
            left: 0,
            top: -5,
            zIndex: 2,
        },
    })
}
