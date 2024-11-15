import React from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";
import { Path, Svg } from "react-native-svg";

export default function SearchBar({ placeholder }) {
    return (
        <View style={ styles.wrapper }>
            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none" style={ styles.search }>
                <Path d="M3.95608 0.985135C2.25698 1.96603 1.04148 3.5501 0.533729 5.44518C0.0258722 7.34025 0.286602 9.31977 1.26749 11.0189C2.57582 13.2848 5.01532 14.6925 7.63426 14.6925C8.46117 14.6925 9.28166 14.5501 10.0595 14.277L13.3637 20L15.7196 18.6398L12.416 12.9178C13.5319 11.963 14.3353 10.6967 14.7237 9.2473C15.2314 7.35222 14.9707 5.37281 13.9898 3.67361C12.6816 1.40768 10.242 0 7.62316 0C6.3404 0 5.07234 0.340602 3.95608 0.985135ZM11.6339 5.03384C12.2515 6.10364 12.4156 7.35005 12.0959 8.54324C11.7762 9.73644 11.0109 10.7338 9.9411 11.3514C9.23792 11.7574 8.44017 11.972 7.63426 11.972C5.98424 11.972 4.44739 11.0856 3.62353 9.65864C3.00587 8.58884 2.84177 7.34254 3.16159 6.14923C3.4813 4.95604 4.24662 3.95871 5.31642 3.34095C6.0195 2.93506 6.81724 2.72047 7.62316 2.72047C9.27328 2.72047 10.81 3.6069 11.6339 5.03384Z" fill="#BFBFBF"/>
            </Svg>
            <TextInput placeholder={ placeholder } style={ styles.input } placeholderTextColor="#B6B6B6"/>
        </View>
    )
}



const styles = StyleSheet.create({
    wrapper: {
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: "center",
        padding: 14,
        paddingBottom: 10,
        marginBottom: 20,
        borderColor: '#F5F5F5',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
    },
    input: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        width: '100%',
        flexShrink: 1,
    },
    search: {
        marginRight: 10,
        marginTop: -4,
    }
})
