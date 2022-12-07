import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import { FavouriteButton, BackButton } from "./elements";

/**
 * @typedef ImageObject
 * @type {Object}
 * @property {number} id - ID
 * @property {string} url - A link to the image
 */

/**
 * @component
 * @param {Object} props
 * @param {ImageObject[]} props.images - Array of image objects.
 * @param {boolean} [props.showNav=false] - Show "Go Back" button.
 * @param {function} [props.favCallback] - Callback function for "Add to Favourites" button. Enables its display on top of the slider.
 * @param {StyleSheet} style - Element styles.
 * @returns {JSX.Element}
 */
export default function ImageSlider({ images, showNav = false, favCallback = null, style }) {
    return (
        <View style={ style }>
            <BackButton showNav={ showNav }/>
            {/*<FavouriteButton callback={ favCallback }/>*/}

            <Swiper loop={ false }>
                { images.map((image) => (
                    <Image key={ image.id } source={{ uri: image.url }} style={ styles.sliderImage }/>
                )) }
            </Swiper>
        </View>
    )
}



const styles = StyleSheet.create({
    sliderImage: {
        flex: 1,
        width: '100%',
        height: 'auto',
    }
})
