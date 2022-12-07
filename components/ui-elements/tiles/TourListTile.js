import React from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Path, Svg} from "react-native-svg";
import {useNavigation} from "@react-navigation/native";

export default function TourListTile({ tour }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={ styles.container }
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate('tour-details') }
        >

            <ImageBackground source={{ uri: tour.image }} style={ styles.tile }>
                <View style={ styles.bgDim }>
                    <Text style={ styles.nameText }>{ tour.name.toUpperCase() }{'\n'}{ tour.length }</Text>
                    <Text style={ styles.descriptionText }>{ tour.shortDescription }</Text>
                </View>
            </ImageBackground>
            <Svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={ styles.arrow }>
                <Path d="M1 17L9 9L0.999999 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        aspectRatio: 335/200,
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    bgDim: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'space-between',
    },
    tile: {
        flex: 1,
        resizeMode: 'cover',
    },
    nameText: {
        fontSize: 14,
        fontFamily: 'Raleway-Bold',
        color: '#fff',
        padding: 18,
        paddingRight: 34,
    },
    descriptionText: {
        color: '#fff',
        fontSize: 12,
        padding: 18,
        marginBottom: 9,
        fontFamily: 'Raleway-Medium',
        lineHeight: 15,
    },
    arrow: {
        position: "absolute",
        width: 8,
        top: 18,
        right: 18
    }
})
