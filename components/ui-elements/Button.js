import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function Button({ text, link, style, type = 'blue' }) {
    return (
        <View style={ style }>
            <TouchableOpacity
                style={ [
                    styles.button, (type === 'black') ? {backgroundColor: '#242424'} : null,
                    (type === 'white' ? {backgroundColor: '#fff'} : null)
                ] } onPress={ link } activeOpacity={0.5}
            >
                <Text style={ [styles.buttonText, (type === 'white' ? {color: '#0080DE'} : null)] }>
                    { text }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0080DE',
        paddingVertical: 8,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#0080DE',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'DMSans-Bold',
        fontSize: 18,
        textAlign: 'center',
    }
})
