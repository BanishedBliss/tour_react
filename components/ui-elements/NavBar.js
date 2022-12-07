import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Circle, Path, Svg } from "react-native-svg";

export default function NavBar() {
    const navigation = useNavigation();

    return (
        <View style={ styles.navbar }>
            { tiles.map((item) => (
                <TouchableOpacity key={ item.id }
                                  style={ styles.tile }
                                  activeOpacity={ 0.4 }
                                  onPress={ () => navigation.navigate( item.link ) }>

                    { item.svg() /* Render SVG */ }
                    <View style={ styles.textContainer }>
                        <Text style={ styles.text }>{ item.title }</Text>
                    </View>

                </TouchableOpacity>
            )) }
        </View>
    )
}



const tiles = [
    { id: 1, title: 'Услуги', svg: renderServicesSvg, link: 'rent' },
    { id: 2, title: 'Пакетные предложения', svg: renderOffersSvg, link: 'tours' },
    { id: 3, title: 'VIP', svg: renderVIPSvg, link: 'vip' },
    { id: 4, title: 'О нас', svg: renderAboutSvg, link: 'about' },
    { id: 5, title: 'Корзина', svg: renderCartSvg, link: 'cart'},
    /*{ id: 5, title: 'Избранное', svg: renderFavouriteSvg, link: 'rent' },
    { id: 6, title: 'Профиль', svg: renderProfileSvg, link: 'rent' },*/
]

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingVertical: 10,
        flexShrink: 0,
        borderTopWidth: 1,
        borderColor: '#0080DE',
        backgroundColor: '#fff',
    },
    tile: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        flexWrap: 'wrap',
    },
    icon: {
        height:32,
        width: 32
    },
    textContainer: {
        flexDirection: 'row',
        flexBasis: '100%',
        justifyContent: 'center',
    },
    text: {
        fontSize: 10,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    },
})

/* Icon Source: https://www.majesticons.com/ */

function renderServicesSvg() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M26.6667 25.6666V13.8333C26.6667 13.5186 26.5185 13.2222 26.2667 13.0333L16.6 5.78331C16.2445 5.51665 15.7556 5.51665 15.4 5.78331L5.73337 13.0333C5.48157 13.2222 5.33337 13.5186 5.33337 13.8333V25.6666C5.33337 26.2189 5.78109 26.6666 6.33337 26.6666H12.3334C12.8857 26.6666 13.3334 26.2189 13.3334 25.6666V21C13.3334 20.4477 13.7811 20 14.3334 20H17.6667C18.219 20 18.6667 20.4477 18.6667 21V25.6666C18.6667 26.2189 19.1144 26.6666 19.6667 26.6666H25.6667C26.219 26.6666 26.6667 26.2189 26.6667 25.6666Z" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderServicesSvgActive() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M27 13.5V27H20V21.5C20 20.3954 19.1046 19.5 18 19.5H14C12.8954 19.5 12 20.3954 12 21.5V27H5L5 13.5L16 5.25L27 13.5Z" fill="#0080DE" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderOffersSvg() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M28 22.6666L25.3333 13.3333H6.66667L4 22.6666M28 22.6666H4M28 22.6666L27.0454 26.4851C26.8228 27.3754 26.0228 28 25.1051 28H6.89489C5.97715 28 5.17718 27.3754 4.9546 26.485L4 22.6666M11.0787 18.6666H20.9213C21.4169 18.6666 21.7392 18.1451 21.5176 17.7018V17.7018C21.4047 17.476 21.1738 17.3333 20.9213 17.3333H11.0787C10.8262 17.3333 10.5953 17.476 10.4824 17.7018V17.7018C10.2608 18.1451 10.5831 18.6666 11.0787 18.6666Z" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M4.72841 6.54944C4.36337 5.27181 5.3227 4 6.65146 4H25.3485C26.6773 4 27.6366 5.27181 27.2716 6.54944L25.3333 13.3333H6.66667L4.72841 6.54944Z" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderOffersSvgActive() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M6.66663 12C6.07132 12 5.54814 12.3946 5.38459 12.967L4.51803 16H9.55098C9.56255 15.9737 9.57485 15.9474 9.58792 15.9213C9.87024 15.3567 10.4473 15 11.0786 15H20.9213C21.5525 15 22.1296 15.3567 22.412 15.9213C22.425 15.9474 22.4373 15.9737 22.4489 16H22.5C23.0522 16 23.5 16.4477 23.5 17C23.5 17.5523 23.0522 18 22.5 18H21.9238C21.6501 18.2072 21.3066 18.3333 20.9213 18.3333H11.0786C10.6932 18.3333 10.3498 18.2072 10.0761 18H3.94661L2.71793 22.3004C2.65367 22.5253 2.64971 22.7631 2.70644 22.99L3.53479 26.3035C3.97996 28.0841 5.57989 29.3333 7.41536 29.3333H24.5846C26.42 29.3333 28.02 28.0841 28.4651 26.3035L29.2935 22.99C29.3502 22.7631 29.3462 22.5253 29.282 22.3004L26.6153 12.967C26.4518 12.3946 25.9286 12 25.3333 12H6.66663Z" fill="#0080DE"/>
            <path d="M4.72841 6.54944C4.36337 5.27181 5.3227 4 6.65146 4H25.3485C26.6773 4 27.6366 5.27181 27.2716 6.54944L25.3333 13.3333H6.66667L4.72841 6.54944Z" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderVIPSvg() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4 9.33334L6.66667 26.6667H25.3333L28 9.33334L21.3333 13.3333L16 5.33334L10.6667 13.3333L4 9.33334Z" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Circle cx="16" cy="18.6667" r="2.66667" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderVIPSvgActive() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M16 4C16.4458 4 16.8621 4.2228 17.1094 4.59373L21.7375 11.5359L27.314 8.19001C27.7573 7.92404 28.3144 7.93827 28.7435 8.22654C29.1726 8.5148 29.3965 9.02513 29.3179 9.53608L26.6512 26.8694C26.5511 27.5199 25.9915 28 25.3334 28H6.6667C6.0086 28 5.44893 27.5199 5.34887 26.8694L2.6822 9.53608C2.60359 9.02513 2.82742 8.5148 3.25654 8.22654C3.68566 7.93827 4.24274 7.92404 4.68602 8.19001L10.2625 11.5359L14.8906 4.59373C15.1379 4.2228 15.5542 4 16 4ZM14.3333 18.6667C14.3333 17.7462 15.0795 17 16 17C16.9205 17 17.6667 17.7462 17.6667 18.6667C17.6667 19.5871 16.9205 20.3333 16 20.3333C15.0795 20.3333 14.3333 19.5871 14.3333 18.6667ZM16 15C13.9749 15 12.3333 16.6416 12.3333 18.6667C12.3333 20.6917 13.9749 22.3333 16 22.3333C18.025 22.3333 19.6667 20.6917 19.6667 18.6667C19.6667 16.6416 18.025 15 16 15Z" fill="#0080DE"/>
        </Svg>
    )
}

function renderAboutSvg() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="16" cy="16" r="12" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M16 23V14" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M16 10V9.9999" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderAboutSvgActive() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M16 2.66666C8.63622 2.66666 2.66669 8.63619 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63619 23.3638 2.66666 16 2.66666ZM16 24C16.5523 24 17 23.5523 17 23V14C17 13.4477 16.5523 13 16 13C15.4477 13 15 13.4477 15 14V23C15 23.5523 15.4477 24 16 24ZM17 10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10V9.9999C15 9.44762 15.4477 8.9999 16 8.9999C16.5523 8.9999 17 9.44762 17 9.9999V10Z" fill="#0080DE"/>
        </Svg>
    )
}

function renderFavouriteSvg() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M22.6667 5.33334C18.4 5.33334 16 8.8889 16 10.6667C16 8.8889 13.6 5.33334 9.33333 5.33334C5.06667 5.33334 4 8.8889 4 10.6667C4 20 16 26.6667 16 26.6667C16 26.6667 28 20 28 10.6667C28 8.8889 26.9333 5.33334 22.6667 5.33334Z" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderFavouriteSvgActive() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M22.6667 5.33334C18.4 5.33334 16 8.8889 16 10.6667C16 8.8889 13.6 5.33334 9.33333 5.33334C5.06667 5.33334 4 8.8889 4 10.6667C4 20 16 26.6667 16 26.6667C16 26.6667 28 20 28 10.6667C28 8.8889 26.9333 5.33334 22.6667 5.33334Z" fill="#0080DE" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderProfileSvg() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="16" cy="12" r="8" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M26 28.2C26 23.6713 21.5228 20 16 20C10.4772 20 6 23.6713 6 28.2" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderProfileSvgActive() {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="16" cy="12" r="8" fill="#0080DE" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M16 20C10.4772 20 6 23.6713 6 28.2H26C26 23.6713 21.5228 20 16 20Z" fill="#0080DE" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderCartSvg() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <Path d="M4 13.3333H5.33333M28 13.3333H26.6667M26.6667 13.3333L25.3333 26.6667H6.66667L5.33333 13.3333M26.6667 13.3333H24H21.3333M5.33333 13.3333H8H10.6667M16 18.6667V21.3333M20 18.6667V21.3333M12 18.6667V21.3333M10.6667 13.3333H21.3333M10.6667 13.3333V10.6667C10.6667 8.8889 11.7333 5.33334 16 5.33334C20.2667 5.33334 21.3333 8.8889 21.3333 10.6667V13.3333" stroke="#0080DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

function renderCartSvgActive() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M12.8154 8.11241C12.2136 8.94818 12 9.99114 12 10.6667V12H20V10.6667C20 9.99114 19.7864 8.94818 19.1846 8.11241C18.6318 7.34462 17.6988 6.66667 16 6.66667C14.3012 6.66667 13.3682 7.34462 12.8154 8.11241ZM22.6667 12V10.6667C22.6667 9.56441 22.3469 7.94071 21.3487 6.55426C20.3015 5.09982 18.5679 4 16 4C13.4321 4 11.6985 5.09982 10.6513 6.55426C9.65303 7.94071 9.33332 9.56441 9.33332 10.6667V12H3.99999C3.26361 12 2.66666 12.597 2.66666 13.3333C2.66666 14.0697 3.26361 14.6667 3.99999 14.6667H4.12667L5.33994 26.7993C5.4081 27.4809 5.98165 28 6.66666 28H25.3333C26.0183 28 26.5919 27.4809 26.66 26.7993L27.8733 14.6667H28C28.7364 14.6667 29.3333 14.0697 29.3333 13.3333C29.3333 12.597 28.7364 12 28 12H22.6667ZM11.6667 18.6667C11.6667 18.1144 11.2189 17.6667 10.6667 17.6667C10.1144 17.6667 9.66666 18.1144 9.66666 18.6667V21.3333C9.66666 21.8856 10.1144 22.3333 10.6667 22.3333C11.2189 22.3333 11.6667 21.8856 11.6667 21.3333V18.6667ZM17 18.6667C17 18.1144 16.5523 17.6667 16 17.6667C15.4477 17.6667 15 18.1144 15 18.6667V21.3333C15 21.8856 15.4477 22.3333 16 22.3333C16.5523 22.3333 17 21.8856 17 21.3333V18.6667ZM22.3333 18.6667C22.3333 18.1144 21.8856 17.6667 21.3333 17.6667C20.781 17.6667 20.3333 18.1144 20.3333 18.6667V21.3333C20.3333 21.8856 20.781 22.3333 21.3333 22.3333C21.8856 22.3333 22.3333 21.8856 22.3333 21.3333V18.6667Z" fill="#0080DE"/>
        </Svg>
    )
}
