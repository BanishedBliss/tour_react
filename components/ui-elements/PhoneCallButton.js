import React from "react";
import {ClipPath, Defs, G, Path, Rect, Svg} from "react-native-svg";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function PhoneCallButton({ style, action }) {
    return (
        <TouchableOpacity style={ [styles.phoneCall, style] } activeOpacity={0.7} onPress={ action }>
            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_511_1577)">
                    <Path d="M15 0C6.71572 0 0 6.71572 0 15C0 23.2843 6.71572 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71572 23.2843 0 15 0ZM9.60938 5.95825C9.91843 5.94003 10.1978 6.12475 10.4095 6.45263L12.4603 10.3418C12.6763 10.8026 12.5535 11.2961 12.2315 11.6253L11.2921 12.5647C11.2341 12.6441 11.196 12.7336 11.1951 12.832C11.5553 14.2264 12.648 15.5126 13.6121 16.3971C14.5762 17.2816 15.6123 18.4791 16.9574 18.7628C17.1237 18.8092 17.3273 18.8258 17.4463 18.7152L18.5376 17.6038C18.9143 17.3183 19.4593 17.1799 19.8615 17.4134H19.8798L23.5803 19.5978C24.1235 19.9383 24.1798 20.5964 23.7908 20.9967L21.2421 23.5254C20.8657 23.9114 20.3656 24.0412 19.8798 24.0417C17.7311 23.9774 15.7009 22.9228 14.0333 21.839C11.296 19.8477 8.78518 17.3779 7.20888 14.3939C6.60433 13.1427 5.89415 11.5462 5.96193 10.1496C5.96798 9.62418 6.11012 9.10945 6.48012 8.7708L9.02895 6.22197C9.2275 6.05303 9.42393 5.9692 9.60938 5.95825Z" fill="#1B1B1B"/>
                </G>
                <Defs>
                    <ClipPath id="clip0_511_1577">
                        <Rect width="30" height="30" fill="white"/>
                    </ClipPath>
                </Defs>
            </Svg>
            <Text style={ styles.callText }>Консультация по телефону</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    phoneCall: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12,
    },
    callText: {
        paddingLeft: 10,
        color: '#1B1B1B',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        lineHeight: 22.5,
        textDecorationLine: 'underline',
    },
})
