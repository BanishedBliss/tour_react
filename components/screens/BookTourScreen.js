import React from "react";
import {ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {Button, ScreenHeader, TextInputField} from "../ui-elements";
import {Path, Svg} from "react-native-svg";

export default function BookTourScreen({ route }) {
    return (
        <ScrollView style={ styles.container }>
            <ScreenHeader title="Забронировать экскурсию"/>
            <Text style={ styles.formHeading }>Название экскурсии - {route.params.tourName}</Text>
            <TextInputField label="Ваше имя"/>
            <TextInputField label="Телефон/WhatsApp"/>
            <TextInputField label="Выбрать дату:"/>
            <Text style={ styles.label }>Возможное время:</Text>
            <View style={ styles.times }>

                <TouchableHighlight activeOpacity={0.8} underlayColor='rgba(0,128,222,0.5)' onPress={() => {}} style={ styles.time }>
                    <Text style={ styles.timeText }>7:00</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.8} underlayColor='rgba(0,128,222,0.5)' onPress={() => {}} style={ styles.time }>
                    <Text style={ styles.timeText }>13:00</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.8} underlayColor='rgba(0,128,222,0.5)' onPress={() => {}} style={ styles.time }>
                    <Text style={ styles.timeText }>15:40</Text>
                </TouchableHighlight>

            </View>
            <View style={ styles.peopleCount }>
                <Text style={ styles.peopleText }>Взрослые (3500р):</Text>
                <View style={ styles.buttonContainer }>

                    <TouchableOpacity style={ styles.button } activeOpacity={0.5}>
                        <Text style={ styles.buttonText }>-</Text>
                    </TouchableOpacity>

                    <Text style={ styles.amount }>2</Text>

                    <TouchableOpacity style={ styles.button } activeOpacity={0.5}>
                        <Text style={ styles.buttonText }>+</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={ styles.peopleCount }>
                <Text style={ styles.peopleText }>Дети (2000р):</Text>
                <View style={ styles.buttonContainer }>

                    <TouchableOpacity style={ styles.button } activeOpacity={0.5}>
                        <Text style={ styles.buttonText }>-</Text>
                    </TouchableOpacity>

                    <Text style={ styles.amount }>2</Text>

                    <TouchableOpacity style={ styles.button } activeOpacity={0.5}>
                        <Text style={ styles.buttonText }>+</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={ styles.confidentialRow }>
                <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <Path d="M15.9998 29.3333C8.63584 29.3333 2.6665 23.364 2.6665 16C2.6665 8.63599 8.63584 2.66666 15.9998 2.66666C23.3638 2.66666 29.3332 8.63599 29.3332 16C29.3332 23.364 23.3638 29.3333 15.9998 29.3333ZM14.6705 21.3333L24.0972 11.9053L22.2118 10.02L14.6705 17.5627L10.8985 13.7907L9.01317 15.676L14.6705 21.3333Z" fill="#5B5B5B"/>
                </Svg>
                <View style={ styles.confidentialTextBox }>
                    <Text style={ styles.confidentialNormalText }>Я согласен с </Text>
                    <Text style={ [styles.confidentialNormalText, styles.confidentialUnderline] }>политикой конфиденциальности</Text>
                </View>
            </View>

            <Text style={ styles.totals }>Стоимость к оплате: {route.params.baseCost}</Text>

            <Button style={ styles.buttonFinal } text="Оплатить картой"/>
            <Button style={ [styles.buttonFinal, {marginBottom: 50}] } text="Наличными гиду" type="white"/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
    },
    formHeading: {
        marginTop: -20,
        marginBottom: 8,
        color: '#0080DE',
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    label: {
        color: '#5B5B5B',
        marginBottom: 5,
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
    },
    times: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    time: {
        flexBasis: '30%',
        borderColor: '#f5f5f5',
        borderWidth: 2,
        borderRadius: 7,
        paddingVertical: 6,
    },
    timeText: {
        textAlign: 'center',
        color: '#5B5B5B',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        lineHeight: 30,
    },
    peopleCount: {
        marginVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    peopleText: {
        color: '#5B5B5B',
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: 22,
        height: 22,
        backgroundColor: '#0080DE',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 23.57,
        fontFamily: 'Poppins-Regular',
        marginTop: -6,
        paddingLeft: 0.5,
        textAlign: 'center',
    },
    amount: {
        color: '#5B5B5B',
        paddingHorizontal: 10,
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
    },
    confidentialRow: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    confidentialTextBox: {
        flexDirection: 'row',
        marginLeft: 4,
    },
    confidentialNormalText: {
        color: '#5B5B5B',
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
    },
    confidentialUnderline: {
        textDecorationLine: 'underline',
    },
    totals: {
        marginTop: 20,
        //marginBottom: 8,
        color: '#494949',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonFinal: {
        marginTop: 20,
    }
})
