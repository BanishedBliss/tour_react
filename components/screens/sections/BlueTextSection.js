import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "../../ui-elements";

export default function AdvantagesSection({ advantages, style }) {
    return (
        <View style={ [styles.advantages, style] }>
            <Text style={ [styles.textWhite, styles.advantagesHeading] }>ЧЕМ МЫ МОЖЕМ{"\n"} ВАМ ПОМОЧЬ:</Text>
            <View style={ styles.advantagesUl }>
                { advantages.map((advantage, index) => (
                    <View key={ index } style={ styles.advantage }>
                        <Text style={ [styles.textWhite, styles.ulDot] }>{"\u2022"}</Text>
                        <Text style={ [styles.textWhite, styles.advantagesText] }>
                            { advantage }
                        </Text>
                    </View>
                ))}
            </View>

            {/*<Text style={ [styles.textWhite, styles.advantagesHeading] }>
                РАССЧИТАЙТЕ БЮДЖЕТ МЕРОПРИЯТИЯ САМОСТОЯТЕЛЬНО
            </Text>
            <Text style={ [styles.textWhite, styles.advantagesText] }>
                Каждое мероприятие это отдельный проект и рассчитывается индивидуально,
                поэтому смысла писать цены нет, но мы гарантируем что Вам понравится.
            </Text>*/}
            {/*<Button text="Конструктор мероприятия" type="black" style={ styles.button }/>*/}
        </View>
    )
}


const styles = StyleSheet.create({
    contPadding: {
        paddingHorizontal: 20,
    },
    textWhite: {
        color: '#fff',
    },
    advantages: {
        backgroundColor: '#0080DE',
        paddingVertical: 60,
    },
    advantage: {
        flexDirection: 'row',
        marginBottom: 16,
        flex: 1,
        flexWrap: 'nowrap',
    },
    advantagesHeading: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        marginBottom: 26,
    },
    advantagesUl: {
        //marginBottom: 48,
    },
    ulDot: {
        paddingRight: 12,
        fontSize: 22,
        lineHeight: 24,
    },
    advantagesText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        flex: 1,
    },
    button: {
        marginTop: 32,
    }
})
