import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Path, Svg } from "react-native-svg";

export default function ScreenHeader({ title, goBack, style }) {
    const navigation = useNavigation()

    return (
        <View style={ [styles.headerStyles, style] }>
            { renderArrow(navigation, goBack, styles) }
            <Text style={ styles.text }>{ title }</Text>
        </View>
    )
}



function renderArrow(navigation, goBack, styles) {
    if (goBack) {
        return (
            <TouchableOpacity onPress={ () => navigation.goBack() }
                              style={ styles.arrowContainer }>
                <Svg xmlns="http://www.w3.org/2000/svg" width="13" height="26" viewBox="0 0 13 26" fill="none">
                    <Path d="M12.25 1.66666L0.916666 13L12.25 24.3333" stroke="#0080DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    headerStyles: {
        paddingTop: 0,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Poppins-Medium',
        color: '#0080DE',
        fontSize: 26,
    },
    arrowContainer: {
        paddingRight: 25,
        marginTop: -4,
    }
})

