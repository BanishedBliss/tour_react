import React from "react";
import { Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryTile({ title, backgroundUrl, type, screenName, params = {} }) {
    const navigation = useNavigation()
    const aspectRatio = setAspectRatio(type)
    const styles = setStyles(aspectRatio)

    return (
        <TouchableOpacity
            style={ styles.container }
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate(screenName, params) }
        >
            <ImageBackground source={{ uri: backgroundUrl }} style={ styles.tile }>
                <Text style={ styles.text }>{ title.toUpperCase() }</Text>
            </ImageBackground>
            <Image source={ require('./img/arrow.png') } style={ styles.arrow }/>
        </TouchableOpacity>
    )
}



export function mapCategoryTiles(items, screenName) {
    return items.map(item => (
        <CategoryTile key={item.id}
                      title={item.title}
                      backgroundUrl={item.backgroundUrl}
                      type={item.type}
                      screenName={screenName}
                      params={item.params}
        />)
    )
}

function setAspectRatio(type) {
    switch (type) {
        case 'full':
            return {
                aspectRatio: 1.5,
                width: '100%',
            }
        case 'half':
            return  {
                aspectRatio: 0.8,
                width: '47%',
            }
        default:
            return {
                aspectRatio: 1.3,
                width: '47%'
            }
    }
}

function setStyles(aspectRatio) {
    return StyleSheet.create({
        container: {
            ...aspectRatio,
            marginBottom: 15,
            borderRadius: 10,
            overflow: 'hidden',
        },
        tile: {
            flex: 1,
            resizeMode: 'cover'
        },
        text: {
            fontSize: 14,
            color: '#fff',
            padding: 18,
            paddingRight: 34,
        },
        arrow: {
            position: "absolute",
            width: 8,
            top: 18,
            right: 18
        }
    })
}
