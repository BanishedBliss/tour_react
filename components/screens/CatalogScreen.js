import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ScreenHeader, SearchBar, mapCategoryTiles } from "../ui-elements";

export default function CatalogScreen() {
    const title = "Каталог"
    const [categories, setCategories] = useState(categoriesData)

    return (
        <ScrollView style={ styles.container }>
            <ScreenHeader title={ title } goBack/>
            <SearchBar placeholder="Поиск"/>
            <View style={ styles.categoryContainer }>
                { mapCategoryTiles(categories, 'catalog-list') }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    categoryContainer: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
        alignItems: "flex-start",
    }
})

const categoriesData = [
    {
        id: 1,
        title: 'Rolls-Royce',
        type: 'full',
        backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        params: { title: 'Rolls-Royce' },
    },
    {
        id: 2,
        title: 'Lamborghini',
        type: 'small',
        backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        params: { title: 'Lamborghini' },
    },
    {
        id: 3,
        title: 'Porsche',
        type: 'small',
        backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        params: { title: 'Porsche' },
    },
    {
        id: 4,
        title: 'Mercedes',
        type: 'full',
        backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        params: { title: 'Mercedes' },
    },
    {
        id: 5,
        title: 'BMW',
        type: 'full',
        backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        params: { title: 'BMW' },
    },
    {
        id: 6,
        title: 'Bentley',
        type: 'small',
        backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        params: { title: 'Bentley' },
    },
    {
        id: 7,
        title: 'McLauren',
        type: 'small',
        backgroundUrl: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        params: { title: 'McLauren' },
    },
]
