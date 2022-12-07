import React, {useState} from "react"
import { ScrollView, StyleSheet } from "react-native";
import { ProductInfo, ImageSlider, ProductsSlider } from "../ui-elements";

export default function CatalogDetailsScreen({ route }) {
    const [info, setInfo] = useState({...route.params, ...infoData})

    return (
        <ScrollView style={ styles.container }>
            <ImageSlider images={ info.images } showNav favCallback={ true } style={ styles.imageSlider }/>
            <ProductInfo info={ info }/>
            <ProductsSlider title="Похожие товары:" products={ info.similarProducts }/>
            <ProductsSlider title="С этим товаром покупают:" products={ info.boughtAlong }/>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
    },
    imageSlider: {
        marginTop: 0,
        height: 253,
    },
})

const infoData = {
    images: [
        { id: 1, url: "https://upmycash.ru/storage/tourImages/1664345529_1759076018_0_256_2730_1792_1920x0_80_0_0_4fd54a39a0f0983054f4713d9ea56fe4.jpg" },
        { id: 2, url: "https://upmycash.ru/storage/tourImages/1664345394_zoa_7803_unstudio_seafront_sochi_0023_cropped.jpg(mediaclass-list-image.fcd54d3441375085a87028277be316313cf123a5).jpg" },
        { id: 3, url: "https://upmycash.ru/storage/tourImages/1664891883lake-2970657_1280.jpg" },
        { id: 4, url: "https://upmycash.ru/storage/tourImages/1664891883abkhazia-3211861_1920.jpg" },
        { id: 5, url: "https://upmycash.ru/storage/tourImages/1664345394_1759076018_0_256_2730_1792_1920x0_80_0_0_4fd54a39a0f0983054f4713d9ea56fe4.jpg"},
    ],
    description: 'Встреча на высшем уровне: ваш благородный внедорожник и мощь AMG. Здесь одно ни в чем не уступает другому. Новый Mercedes-AMG GLS 63 4MATIC+ не только самый просторный AMG, но и самый шикарный.',
    similarProducts: [
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
    ],
    boughtAlong: [
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
    ],
}
