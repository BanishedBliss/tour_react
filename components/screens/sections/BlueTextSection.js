import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "../../ui-elements";

export default function BlueTextSection({ content, style }) {
    return (
        <View style={ [styles.advantages, style] }>
            { content.map((item, index) => renderBlockType(item.type, item.content, index)) }

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



function renderBlockType(type, content, key) {
    switch (type) {
        case 'heading':
            return (<Text key={ key } style={ [styles.textWhite, styles.advantagesHeading] }>{ content }</Text>)
        case 'text':
            return (<Text key={ key } style={ [styles.textWhite, styles.plainText] }>{ content }</Text>)
        case 'ul':
            return (
                <View key={ key }>
                    { content.map((item, index) => (
                        <View key={ index } style={ styles.advantage }>
                            <Text style={ [styles.textWhite, styles.ulDot] }>{"\u2022"}</Text>
                            <Text style={ [styles.textWhite, styles.advantagesText] }>
                                { item }
                            </Text>
                        </View>
                    )) }
                </View>
            )
    }
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
    },
    plainText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        lineHeight: 22.5,
    }
})
