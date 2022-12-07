import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInputField } from "../../ui-elements";

export default function OrderInfo({ view, updateView }) {
    return (
        <View>
            <TextInputField label="Имя"
                            value={ view.firstName }
                            changeText={ updateView('info', 'firstName') }/>

            <TextInputField label="Фамилия"
                            value={ view.lastName }
                            changeText={ updateView('info', 'lastName') }/>

            <TextInputField label="Номер телефона"
                            value={ view.phone }
                            changeText={ updateView('info', 'phone') }/>

            <TextInputField label="Электронная почта"
                            value={ view.email }
                            changeText={ updateView('info', 'email') }/>

            <Button text="Далее" style={ styles.button }/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 28,
    }
})

