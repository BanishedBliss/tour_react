import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * @typedef SaleTag
 * @type {Object}
 * @property {string} text - Tag text
 * @property {string} color - Tag color (HEX)
 */

/**
 * @component
 * @param {Object} props
 * @param {SaleTag} props.tag
 * @returns {JSX.Element|null}
 */
export default function SaleTag({ tag, style = {} }) {
    if (!tag) return null
    const styles = renderStyles(tag.color, style)

    return (
        <View style={[styles.tag, styles.tagUnique]}>
            <Text style={styles.tagText}>{ tag.text }</Text>
        </View>
    )
}



function renderStyles(color, style) {
    const unique = color ?
        {tagUnique: {
            backgroundColor: color  // From DB: {hit: #DE0000, low-price: #12DE00, new: #DEA000}
        }} :
        {tagUnique: {}}

    return StyleSheet.create({
        ...unique,
        tagText: {
            color: '#fff',
            fontSize: 12,
        },
        tag: {
            paddingHorizontal: 12,
            paddingVertical: 2,
            borderRadius: 12,
            ...style
        }
    })
}
