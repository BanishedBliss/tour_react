import React, {useState} from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { ScreenHeader, SearchBar, CatalogListTile, NavBar } from "../ui-elements";

export default function CatalogListScreen({ route }) {
    const { title } = route.params
    const [data, setData] = useState(catalogData)
    const renderItem = ({ item }) => (
        <CatalogListTile key={ item.id }
                         data={ item }
        />
    )

    return (
        <FlatList
            ListHeaderComponent={<>
                <ScreenHeader title={ title } goBack/>
                <SearchBar placeholder="Поиск" />
            </>}
            ListFooterComponent={
                <View style={{ height: 20 }}/>
            }
            data={ data }
            renderItem={ renderItem }
            keyExtractor={ item => item.id }
            style={ styles.content }
        />
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
        backgroundColor: '#fff',
    }
})

const catalogData = [
    {
        id: 1,
        title: 'Mercedes-Benz GLS AMG GLS 63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '8000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: {},
    },
    {
        id: 2,
        title: 'Mercedes-Benz GLS AMG GLS 63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '8000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: {},
    },
    {
        id: 3,
        title: 'Mercedes-AMG E63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '10000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: { text: 'Хит', color: '#DE0000'},
    },
    {
        id: 4,
        title: 'Mercedes-Benz GLS AMG GLS 63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '8000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: { text: 'Низкая цена', color: '#12DE00'},
    },
    {
        id: 5,
        title: 'Mercedes-AMG E63',
        image: 'https://upmycash.ru/storage/tourImages/166852247811111-2.jpg',
        priceValue: '10000',
        priceCurrency: 'р',
        priceUnit: '/час',
        inCart: false,
        inFavourite: false,
        saleTag: { text: 'Новинка', color: '#DEA000'},
    },
]
