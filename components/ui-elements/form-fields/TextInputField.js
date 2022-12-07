import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

export default function FormInputField({ label }) {

    return (
        <View>
            <Text style={ styles.inputLabel }>{ label }</Text>
            <View>
                <TextInput></TextInput>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    inputLabel: {

    }
})
