import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {ClipPath, Defs, G, Path, Rect, Svg} from "react-native-svg";

export default function PromocodeInput({ style }) {

    return (
        <View style={ style }>
            <View style={ styles.container }>
                { renderGiftSvg(styles.svg) }
                <TextInput placeholder="Введите промокод" placeholderTextColor="#333333" style={ styles.input }/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#F5F5F5',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    svg: {
        flexShrink: 0,
    },
    input: {
        color: '#333',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 18,
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    }
})

function renderGiftSvg(style) {
    return (
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={ style }>
            <G clipPath="url(#clip0_516_2315)">
                <Rect width="22" height="22" fill="white"/>
                <Path d="M15.5382 0.445801L11.8394 5.32512H17.9645C17.4409 2.37784 15.5382 0.445801 15.5382 0.445801Z" fill="#0080DE"/>
                <Path d="M6.1406 0.445801C6.1406 0.445801 4.23791 2.37784 3.71436 5.32512H9.83948L6.1406 0.445801Z" fill="#0080DE"/>
                <Path d="M12.223 17.1454L11.0001 15.9225L9.77718 17.1085V12.2168H3.69971V22H18.3746V12.2168H12.223V17.1454Z" fill="#0080DE"/>
                <Path d="M18.5219 6.32513H11.7773V11.2168H18.5219V6.32513Z" fill="#0080DE"/>
                <Path d="M9.77723 6.32513H3.03271V11.2168H9.77723V6.32513Z" fill="#0080DE"/>
            </G>
            <Defs>
                <ClipPath id="clip0_516_2315">
                    <Rect width="22" height="22" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}
