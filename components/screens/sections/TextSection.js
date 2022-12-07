import React from "react";
import {StyleSheet, Text, View} from "react-native";
import YouTubeVideo from "../../ui-elements/YouTubeVideo";
import {Button} from "../../ui-elements";

export default function TextSection({ content, isBlack = false, style }) {
    const colors = {
        backgroundColor: (isBlack) ? '#242424' : '#fff',
        textColor: (isBlack) ? '#fff' : '#5B5B5B',
        headingColor: (isBlack) ? '#fff' : '#0080DE',
        dotColor: (isBlack) ? '#0080DE' : '#494949',
        buttonColor: (isBlack) ? 'white' : 'blue',
    }

    return (
        <View style={ [styles.aboutDetails, {backgroundColor: colors.backgroundColor}, style ] }>
            { content.map((item, index) => renderBlockType(item.type, item.content, index, colors)) }
        </View>
    )
}



const styles = StyleSheet.create({
    aboutDetails: {
        paddingVertical: 40,
    },
    aboutDetailsText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        lineHeight: 22.5,
        marginBottom: 20,
    },
    heading: {
        fontFamily: 'Raleway-Medium',
        fontSize: 20,
        lineHeight: 23.48,
        marginBottom: 12,
    },
    button: {
        marginHorizontal: -15,
    },
    li: {
        flexDirection: 'row',
        marginBottom: 16,
        flex: 1,
        flexWrap: 'nowrap',
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
})

function renderBlockType(type, content, key, colors) {
    switch (type) {
        case 'heading':
            return (<Text key={ key } style={ [styles.heading, { color: colors.headingColor }] }>{ content }</Text>)
        case 'text':
            return (<Text key={ key } style={ [styles.aboutDetailsText, { color : colors.textColor }] }>{ content }</Text>)
        case 'video':
            return (<YouTubeVideo key={ key } title={ content.title } videoId={ content.videoId } style={{ marginVertical: 35 }}/>)
        case 'button':
            return (<Button key={ key } text={ content.title } link={ content.action } type={ colors.buttonColor } style={ styles.button }/>)
        case 'ul':
            return (
                <View key={ key }>
                    { content.map((item, index) => (
                        <View key={index} style={styles.li}>
                            <Text style={[styles.ulDot, { color: colors.dotColor }]}>{"\u2022"}</Text>
                            <Text style={[styles.advantagesText, { color: colors.textColor }]}>
                                {item}
                            </Text>
                        </View>
                    )) }
                </View>
            )

    }
}
