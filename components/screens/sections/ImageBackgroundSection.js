import React from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {Button} from "../../ui-elements";
import {backendUrl} from "../../../App";

export default function ImageBackgroundSection({ fullHeight, text, button, style, image }) {
    return (
        <ImageBackground source={{ uri: backendUrl + image }}
                         style={ [styles.imageBackground, {height: fullHeight}, style] }>
            <View style={ [styles.largePadding, styles.imageBackground] }>
                <View style={ styles.mainText }>
                    <Text style={ [styles.mainTitle, styles.textWhite] }>{ text.title.toUpperCase() }</Text>
                    <Text style={ [styles.mainDescription, styles.textWhite] }>
                        { text.description }
                    </Text>
                </View>
                { button }
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    largePadding: {
        paddingHorizontal: 40,
    },
    imageBackground: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0,0,0, 0.60)',
        flex: 1,
    },
    mainText: {
        flexDirection: 'column',
    },
    mainTitle: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 26,
    },
    mainDescription: {
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
    },
    textWhite: {
        color: '#fff',
    }
})
