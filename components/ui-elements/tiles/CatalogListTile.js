import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryListTile({ data }) {
    let { id, title, image, priceValue, priceCurrency, priceUnit, inCart, inFavourites, saleTag } = data
    const navigation = useNavigation()
    const pressLink = () => navigation.navigate('catalog-details', data)
    const styles = setStyles()
    priceValue = indentPrice(priceValue)

    return (
        <View style={ styles.tile }>
            {/* Tile Image */}
            { renderTag( saleTag, styles ) }
            <TouchableOpacity style={ styles.imageContainer } activeOpacity={ 0.8 } onPress={ pressLink }>
                <Image source={{ uri: image }} style={ styles.image }/>
            </TouchableOpacity>
            <View style={ styles.info }>

                {/* Tile Info */}
                <View>
                    <TouchableOpacity activeOpacity={ 0.75 } onPress={ pressLink }>
                        <Text style={ styles.title }>{ title }</Text>
                    </TouchableOpacity>
                    <Text style={ styles.price }>{ priceValue } { priceCurrency }{ priceUnit }</Text>
                </View>

                {/* Tile Buttons */}
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity style={ styles.button } activeOpacity={ 0.8 }>
                        <Text style={ styles.buttonText }>Купить</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={ 0.2 }>
                        <Image source={ setIcon( inFavourites ) } style={ styles.fav }/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}



function indentPrice(value) {
    for (let i = value.length - 3; i > 0; i-=3) {
        value = [value.slice(0, i), ' ', value.slice(i)].join('');
    }
    return value
}

function setStyles() {
    return StyleSheet.create({
        tile: {
            width: '100%',
            flexDirection: 'row',
            marginBottom: 20,
            flexWrap: 'nowrap',
        },
        imageContainer: {
            width: '47%',
            height: undefined,
            flexShrink: 0,
            borderRadius: 10,
            overflow: 'hidden',
        },
        image: {
            width: '100%',
            height: undefined,
            aspectRatio: 1.4363,
        },
        info: {
            width: '100%',
            flexShrink: 1,
            paddingLeft: 19,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        title: {
            color: '#444444',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 2,
        },
        price: {
            color: '#989898',
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        button: {
            height: 35,
            backgroundColor: '#0080DE',
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            color: '#fff',
            fontSize: 13,
            fontWeight: 'bold',
            paddingHorizontal: 20,
        },
        fav: {
            width: 24,
            marginRight: 6,
        },
        tag: {
            position: 'absolute',
            left: 0,
            top: -5,
            zIndex: 2,
            paddingHorizontal: 12,
            paddingVertical: 2,
            borderRadius: 12,
        },
        tagHit: {
            backgroundColor: '#DE0000',
        },
        tagLowPrice: {
            backgroundColor: '#12DE00'
        },
        tagNew: {
            backgroundColor: '#DEA000',
        },
        tagText: {
            color: '#fff',
            fontSize: 12,
        },
    })
}

function renderTag(saleTag, styles) {
    switch (saleTag) {
        case '':
            return null
        case 'hit':
            return (<View style={[styles.tag, styles.tagHit]}>
                        <Text style={styles.tagText}>Хит</Text>
                    </View>)
        case 'low-price':
            return (<View style={[styles.tag, styles.tagLowPrice]}>
                        <Text style={styles.tagText}>Низкая цена</Text>
                    </View>)
        case 'new':
            return (<View style={[styles.tag, styles.tagNew]}>
                        <Text style={styles.tagText}>Новинка</Text>
                    </View>)
        default:
            return null
    }
}

function setIcon(inFavourites) {
    return inFavourites ?
        require('./img/favourite.png') :
        require('./img/favourite-none.png')
}
