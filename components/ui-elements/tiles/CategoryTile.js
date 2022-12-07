import React from "react";
import { Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Path, Svg} from "react-native-svg";

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
            <Svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={ styles.arrow }>
                <Path d="M1 17L9 9L0.999999 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>

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
                aspectRatio: 1.675,
                width: '100%',
            }
        case 'half':
            return  {
                aspectRatio: 0.79,
                width: '47%',
            }
        default:
            return {
                aspectRatio: 1.316,
                width: '47%'
            }
    }
}

function setStyles(aspectRatio) {
    return StyleSheet.create({
        container: {
            ...aspectRatio,
            marginBottom: 20,
            borderRadius: 10,
            overflow: 'hidden',
        },
        tile: {
            flex: 1,
            resizeMode: 'cover'
        },
        text: {
            fontSize: 14,
            fontFamily: 'Raleway-Bold',
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
