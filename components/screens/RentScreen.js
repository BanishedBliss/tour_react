import React, {useState} from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { mapCategoryTiles, ScreenHeader } from "../ui-elements";

export default function RentScreen({ route }) {
    const title = 'Аренда';
    const [housings, setHousings] = useState(housingsData)
    const [cars, setCars] = useState(carsData)

    return (
        <ScrollView style={ styles.container }>
            <ScreenHeader title={ title } />
            <Text style={ styles.categoryHeading }>Жилье</Text>
            <View style={ styles.categoryContainer }>
                { mapCategoryTiles(housings, 'catalog') }
            </View>
            <Text style={ styles.categoryHeading }>Транспорт</Text>
            <View style={ styles.categoryContainer }>
                { mapCategoryTiles(cars, 'catalog') }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    categoryHeading: {
        fontSize: 20,
        fontFamily: 'Raleway-Bold',
        color: '#494949',
        marginBottom: 20,
    },
    categoryContainer: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
        alignItems: "flex-start",
    }
})

const housingsData = [
    { id: 1, title: 'Аппартаменты', type: 'full', backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg'},
    { id: 2, title: 'Отели', type: 'half', backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg'},
    { id: 3, title: 'Виллы, Таунхаунсы', type: 'half', backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg'},
]

const carsData = [
    { id: 1, title: 'Премиальные авто', type: 'full', backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg'},
    { id: 2, title: 'Спорткары, редкие авто', type: 'small', backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg'},
    { id: 3, title: 'Внедорож- ники', type: 'small', backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg'},
    { id: 4, title: 'Мототехника', type: 'full', backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg'},
]
