import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Path, Svg} from "react-native-svg";

export default function CategoryListTileButtons({ inCart, inFavourite }) {
    return (
        <View style={ styles.buttonContainer }>
            <TouchableOpacity style={ styles.button } activeOpacity={ 0.8 }>
                <Text style={ styles.buttonText }>Купить</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity activeOpacity={ 0.2 }>
                <Svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={ styles.fav }>
                    <Path d="M22.0615 2.409C20.8047 1.15227 19.141 0.465398 17.3653 0.465398C15.5896 0.465398 13.9207 1.15736 12.664 2.41409L12.0076 3.07044L11.3411 2.40391C10.0844 1.14719 8.41044 0.450134 6.63474 0.450134C4.86413 0.450134 3.19527 1.1421 1.94363 2.39374C0.686904 3.65047 -0.00506011 5.31932 2.78603e-05 7.09502C2.78603e-05 8.87072 0.697079 10.5345 1.95381 11.7912L11.509 21.3464C11.6413 21.4787 11.8194 21.5499 11.9924 21.5499C12.1654 21.5499 12.3434 21.4838 12.4757 21.3515L22.0513 11.8116C23.308 10.5548 24 8.88599 24 7.11029C24.0051 5.33458 23.3182 3.66573 22.0615 2.409ZM21.0846 10.8398L11.9924 19.8964L2.92052 10.8245C1.92328 9.82726 1.37378 8.50439 1.37378 7.09502C1.37378 5.68566 1.91819 4.36278 2.91543 3.37063C3.90759 2.37847 5.23046 1.82897 6.63474 1.82897C8.04411 1.82897 9.37207 2.37847 10.3693 3.37572L11.5192 4.5256C11.7889 4.79526 12.2213 4.79526 12.491 4.5256L13.6307 3.38589C14.6279 2.38865 15.9559 1.83915 17.3602 1.83915C18.7645 1.83915 20.0873 2.38865 21.0846 3.3808C22.0818 4.37805 22.6262 5.70092 22.6262 7.11029C22.6313 8.51965 22.0818 9.84253 21.0846 10.8398Z" fill="#0080DE"/>
                </Svg>
            </TouchableOpacity>*/}
        </View>
    )
}



const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: '#0080DE',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'DMSans-Bold',
    },
    fav: {
        marginRight: 6,
    }
})
