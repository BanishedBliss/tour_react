import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Path } from 'react-native-svg'
import { useNavigation } from "@react-navigation/native";

export default function BackButton({ showNav }) {
    if (!showNav) return null
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={ styles.arrowContainer } activeOpacity={ 0.3 } onPress={ () => navigation.goBack() }>
            <Svg width="13" height="25" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <Path d="M12.25 1.66666L0.916666 13L12.25 24.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    arrowContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 2,
        padding: 10,
    },
    arrow: {
        height: 23,
        transform: [{rotate: '180deg'}],
    },
})
