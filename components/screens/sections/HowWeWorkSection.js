import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function HowWeWorkSection({points, style}) {
    return (
        <View style={ [styles.section, style] }>
            <Text style={ [styles.textWhite, styles.sectionTitle] }>КАК МЫ РАБОТАЕМ:</Text>
            { points.map((pointItem, index) => {

                const dashedLine = (points[index] !== points[points.length - 1]) ?
                    <View style={ styles.dashedLine }/>
                    : null

                return (
                    <View key={index} style={styles.point}>
                        <View style={styles.indexColumn}>
                            <View style={styles.pointIndexCircle}>
                                <Text style={styles.pointIndexText}>
                                    {index + 1}
                                </Text>
                            </View>

                            { dashedLine }
                        </View>

                        <View style={styles.pointText}>
                            <Text style={[styles.textWhite, styles.pointTitle]}>
                                {pointItem.title.toUpperCase()}
                            </Text>
                            <Text style={[styles.textWhite, styles.pointDescription]}>
                                {pointItem.description}
                            </Text>
                        </View>
                    </View>
                )
            }) }
        </View>
    )
}


const styles = StyleSheet.create({
    textWhite: {
        color: '#fff',
    },
    section: {
        backgroundColor: '#242424',
        paddingTop: 60,
        paddingBottom: 30,
    },
    sectionTitle: {
        marginBottom: 34,
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
    },
    point: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        flex: 1,
        flexGrow: 0,
        flexShrink: 1,
    },
    indexColumn: {
        marginRight: 24,
        flexShrink: 1,
        flexGrow: 0,
        flexDirection: 'column',
        alignItems: 'center',
    },
    pointIndexCircle: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
    },
    pointIndexText: {
        color: '#0080DE',
        fontFamily: 'Raleway-Medium',
        fontSize: 26,
        textAlign: 'center',
        lineHeight: 38,
    },
    dashedLine: {
        borderStyle: 'dashed',
        borderColor: '#fff',
        borderWidth: 1,
        height: '100%',
        width: 1,
        flexShrink: 1,
        flexGrow: 0
    },
    pointText: {
        flex: 1,
        paddingBottom: 20,
    },
    pointTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
    },
    pointDescription: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
    },
})
