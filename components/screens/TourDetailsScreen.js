import React, {useRef, useState} from "react";
import {LayoutChangeEvent, ScrollView, StyleSheet, Text, View} from "react-native";
import TourMainSection from "./sections/TourMainSection";
import {Button} from "../ui-elements";
import {useNavigation} from "@react-navigation/native";
import Accordion from "react-native-collapsible/Accordion";
import {Path, Svg} from "react-native-svg";

export default function TourDetailsScreen() {
    const [fullHeight, setFullHeight] = useState(0)
    const [activeSections, setActiveSections] = useState([])
    const updateHeight = (e: LayoutChangeEvent) => {
        setFullHeight(e.nativeEvent.layout.height)
    }
    const navigation = useNavigation()
    const bookButton = <Button text="Забронировать" link={() => navigation.goBack()}/>

    const collapsibleHeader = (section, index, isActive) => (
        <View style={ styles.sectionTitle }>
            <Text style={ styles.titleText }>{ section.title }</Text>
            <Svg style={ styles.titleSvg } xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                <Path transform={isActive ? "rotate(180,9,5)" : "rotate(0,9,5)"} d="M1 1L9 9L17 1" stroke="#0080DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
        </View>
    )
    const collapsibleContent = (section) => (
        <View style={ styles.sectionContent }>
            <Text style={ styles.sectionContentText }>{ section.content }</Text>
        </View>
    )



    // TODO: Поменять сссылку
    return (
        <ScrollView onLayout={ updateHeight }>
            <TourMainSection
                fullHeight={ fullHeight }
                tour={ tourDetails }
                button={ bookButton }
            />
            <View style={ styles.whiteSection }>
                <Text style={ styles.accordionTitle }>Подробнее об экскурсии</Text>
                <Accordion
                    activeSections={activeSections}
                    sections={ tourDetails.collapsable }
                    renderSectionTitle={() => <View/>}
                    renderHeader={ collapsibleHeader }
                    renderContent={ collapsibleContent }
                    onChange={(activeSections) => setActiveSections(activeSections)}
                    touchableProps={{underlayColor: 'rgba(0,128,222,0.3)'}}
                />

                <Button text="Забронировать" style={ [styles.button, {marginTop: 30}] } link={() => navigation.navigate('tour-book', {tourName: 'Красная поляна', baseCost: '11000р'})}/>
                <Button text="Позвонить гиду" style={ styles.button } type="white"/>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    whiteSection: {
        backgroundColor: '#fff',
    },
    accordionTitle: {
        paddingVertical: 30,
        textAlign: 'center',
        color: '#494949',
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
    },
    sectionTitle: {
        borderColor: '#0080DE',
        borderWidth: 1,
        paddingVertical: 20,
        marginTop: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        paddingLeft: 40,
        color: '#494949',
        fontFamily: 'Raleway-Medium',
        fontSize: 18,
        flexShrink: 1,
    },
    titleSvg: {
        paddingRight: 40,
    },
    sectionContent: {
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    sectionContentText: {
        color: '#444444',
        fontFamily: 'Raleway-Medium',
        fontSize: 15,
    },
    button: {
        marginBottom: 22,
        marginHorizontal: 40,
    }
})


const tourDetails = {
    id: 1,
    name: 'Красная поляна',
    shortDescription: 'Величественные горы,\n' +
        'водопады и другие природные обьекты,\n' +
        'надолго запомнятся своими уникальными\n пейзажами',
    image: '/storage/tourImages/1664345529_1759076018_0_256_2730_1792_1920x0_80_0_0_4fd54a39a0f0983054f4713d9ea56fe4.jpg',
    props: {
        time: 'На 8 часов',
        starts: 'Старт в\nлюбое время',
        schedule: 'Ежедневно',
        price: 'От 500р/тур',
    },
    collapsable: [
        {
            title: 'Программа',
            content: 'Величественные горы,\n' +
                'водопады и другие природные обьекты,\n' +
                'надолго запомнятся своими уникальными пейзажами',
        },
        {
            title: 'Возможные дополнительные расходы',
            content: 'Величественные горы,\n' +
                'водопады и другие природные обьекты,\n' +
                'надолго запомнятся своими уникальными пейзажами',
        },
        {
            title: 'Условия бронирования',
            content: 'Величественные горы,\n' +
                'водопады и другие природные обьекты,\n' +
                'надолго запомнятся своими уникальными пейзажами',
        }
    ],
}

