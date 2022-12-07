import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TextInputField({ value, changeText, label, placeholder, style }) {
    return (
        <View style={ [styles.container, style] }>
            <Text style={ styles.inputLabel }>{ label }</Text>
            <View style={ styles.inputBox }>
                <TextInput value={ value }
                           onChangeText={ text => changeText(text) }
                           placeholder={ placeholder }
                           placeholderTextColor="#B6B6B6"
                           style={ styles.inputText }/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
    inputLabel: {
        color: '#5B5B5B',
        marginBottom: 5,
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
    },
    inputBox: {
        borderColor: '#F5F5F5',
        borderWidth: 2,
        borderRadius: 6,
        padding: 14,
    },
    inputText: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
})
