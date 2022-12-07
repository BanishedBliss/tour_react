import React from "react";
import {StyleSheet, Text, View} from "react-native";
import YouTubeVideo from "../../ui-elements/YouTubeVideo";
import {Button} from "../../ui-elements";

export default function WhiteTextSection({ content, style }) {
    return (
        <View style={ [styles.aboutDetails, style] }>
            { content.map((item, index) => renderBlockType(item.type, item.content, index)) }
            {/*<Text style={ styles.aboutDetailsText }>
                Мы уже более 10 лет занимаемся организацией закрытых частных мероприятий в Сочи.
                Наш наработанный опыт и профессионализм позволяют нам находится на вершине среди лучших в
                сфере создания вечеринок и мероприятий в Сочи с "Вау Эффектом" для наших клиентов.
                Расскажите нам о своих желаниях и позвольте нам Вас удивить
            </Text>
            <YouTubeVideo title="Climbers on Mount Rainier - 4K Time-lapse Clip"
                          videoId="ESsI4r55MV0"
                          style={{ marginVertical: 35 }}/>*/}
        </View>
    )
}



const styles = StyleSheet.create({
    aboutDetails: {
        paddingVertical: 40,
        backgroundColor: '#fff',
    },
    aboutDetailsText: {
        color: '#5B5B5B',
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        lineHeight: 22.5,
        marginBottom: 20,
    },
    heading: {
        color: '#0080DE',
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
        color: '#494949',
        paddingRight: 12,
        fontSize: 22,
        lineHeight: 24,
    },
    advantagesText: {
        color: '#5B5B5B',
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        flex: 1,
    },
})

function renderBlockType(type, content, key) {
    switch (type) {
        case 'heading':
            return (<Text key={ key } style={ styles.heading }>{ content }</Text>)
        case 'text':
            return (<Text key={ key } style={ styles.aboutDetailsText }>{ content }</Text>)
        case 'video':
            return (<YouTubeVideo key={ key } title={ content.title } videoId={ content.videoId } style={{ marginVertical: 35 }}/>)
        case 'button':
            return (<Button key={ key } text={ content.title } link={ content.action } style={ styles.button }/>)
        case 'ul':
            return (
                <View key={ key }>
                    { content.map((item, index) => (
                        <View key={index} style={styles.li}>
                            <Text style={[styles.textWhite, styles.ulDot]}>{"\u2022"}</Text>
                            <Text style={[styles.textWhite, styles.advantagesText]}>
                                {item}
                            </Text>
                        </View>
                    )) }
                </View>
            )

    }
}
