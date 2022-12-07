import React from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {Button} from "../../ui-elements";
import {backendUrl} from "../../../App";
import {ClipPath, Defs, G, Path, Rect, Svg} from "react-native-svg";

export default function TourMainSection({ fullHeight, tour, button, style }) {
    return (
        <ImageBackground source={{ uri: backendUrl + tour.image }}
                         style={ [styles.imageBackground, {height: fullHeight}, style] }>
            <View style={ [styles.largePadding, styles.imageBackground] }>
                <View style={ styles.mainText }>
                    <Text style={ [styles.mainTitle, styles.textWhite] }>{ tour.name.toUpperCase() }</Text>
                    <Text style={ [styles.mainDescription, styles.textWhite] }>
                        { tour.shortDescription }
                    </Text>
                </View>
                <View style={ styles.propList }>
                    <View style={ styles.propGroup }>
                        <View style={ styles.prop }>
                            <Svg style={ styles.svg }  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <Path d="M39.6252 16.0811C38.1232 8.21793 31.7823 1.87699 23.919 0.374962C9.85287 -2.31184 -2.31205 9.85309 0.374748 23.9193C1.87686 31.7824 8.2178 38.1234 16.0809 39.6254C30.1471 42.3122 42.312 30.1473 39.6252 16.0811ZM29.2676 29.2678C28.7793 29.7561 28.1397 30.0002 27.5 30.0002C26.8603 30.0002 26.2207 29.7561 25.7324 29.2678L18.2324 21.7678C17.7637 21.299 17.5 20.6643 17.5 20.0002V10.0002C17.5 8.61832 18.6194 7.5002 20 7.5002C21.3806 7.5002 22.5 8.6184 22.5 10.0002V18.965L29.2676 25.7326C30.2441 26.7092 30.2441 28.2912 29.2676 29.2678Z" fill="white"/>
                            </Svg>
                            <View style={ styles.textContainer }>
                                <Text style={ [styles.textWhite, styles.propText] }>
                                    { tour.props.time }
                                </Text>
                            </View>
                        </View>
                        <View style={ styles.prop }>
                            <Svg style={ [styles.svg, { marginLeft: -10 }] } xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <G clipPath="url(#clip0_507_1332)">
                                    <Path d="M31.4062 38.6328C32.0234 39.25 33.0313 39.25 33.6484 38.6328C34.2656 38.0156 34.2656 37.0078 33.6484 36.3906L30.7969 33.5312L28.5547 35.7812L31.4062 38.6328Z" fill="white"/>
                                    <Path d="M36.3906 33.6484C37.0078 34.2656 38.0156 34.2656 38.6328 33.6484C39.25 33.0313 39.25 32.0234 38.6328 31.4063L35.7813 28.5469L33.5391 30.7891L36.3906 33.6484Z" fill="white"/>
                                    <Path d="M38.656 19.1563C35.0701 16.2422 30.3748 15.3906 26.1326 16.5938L15.9373 6.39844C13.2967 3.75782 4.26541 -1.00781 1.62479 1.63282C-1.00803 4.27344 3.74979 13.3125 6.39041 15.9531L16.6013 26.1719C15.4138 30.3984 16.2732 35.0859 19.1717 38.6563C19.6638 39.2578 20.5545 39.3125 21.1092 38.7656L38.7654 21.0938C39.3123 20.5391 39.2576 19.6406 38.656 19.1563Z" fill="white"/>
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_507_1332">
                                        <Rect width="40" height="40" fill="white"/>
                                    </ClipPath>
                                </Defs>
                            </Svg>
                            <View style={ styles.textContainer }>
                                <Text style={ [styles.textWhite, styles.propText] }>
                                    { tour.props.starts }
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.propGroup }>
                        <View style={ styles.prop }>
                            <Svg style={ styles.svg }  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <G clipPath="url(#clip0_507_1312)">
                                    <Path d="M30.8772 21.4035C25.847 21.4035 21.7544 25.4962 21.7544 30.5263C21.7544 35.5565 25.847 39.6491 30.8772 39.6491C35.9074 39.6491 40 35.5565 40 30.5263C40 25.4962 35.9074 21.4035 30.8772 21.4035ZM30.8772 38.2456C26.6211 38.2456 23.1579 34.7825 23.1579 30.5263C23.1579 26.2702 26.6211 22.807 30.8772 22.807C35.1333 22.807 38.5965 26.2702 38.5965 30.5263C38.5965 34.7825 35.1333 38.2456 30.8772 38.2456Z" fill="white"/>
                                    <Path d="M35.0877 29.8246H31.5789V26.3158C31.5789 25.9277 31.2645 25.614 30.8771 25.614C30.4898 25.614 30.1754 25.9277 30.1754 26.3158V29.8246H26.6666C26.2792 29.8246 25.9648 30.1383 25.9648 30.5263C25.9648 30.9144 26.2792 31.2281 26.6666 31.2281H30.1754V34.7369C30.1754 35.1249 30.4898 35.4386 30.8771 35.4386C31.2645 35.4386 31.5789 35.1249 31.5789 34.7369V31.2281H35.0877C35.475 31.2281 35.7894 30.9144 35.7894 30.5263C35.7894 30.1383 35.475 29.8246 35.0877 29.8246Z" fill="white"/>
                                    <Path d="M18.9474 30.5263C18.56 30.5263 18.2456 30.2126 18.2456 29.8246C18.2456 29.4365 18.56 29.1228 18.9474 29.1228H19.7467C20.2758 24.9109 23.1432 21.426 27.007 20H18.9474C18.56 20 18.2456 19.6863 18.2456 19.2983C18.2456 18.9102 18.56 18.5965 18.9474 18.5965H31.5789C31.9663 18.5965 32.2807 18.9102 32.2807 19.2983C32.2807 19.3319 32.266 19.3607 32.2618 19.393C34.3768 19.6548 36.3109 20.5032 37.8947 21.7755V8.89545C37.8947 4.18387 34.0618 0.350891 29.3502 0.350891H8.54456C3.83298 0.350891 0 4.18387 0 8.89545V29.7011C0 34.4126 3.83298 38.2456 8.54456 38.2456H22.7453C20.8316 36.2309 19.6491 33.5172 19.6491 30.5263H18.9474ZM18.9474 8.77194H31.5789C31.9663 8.77194 32.2807 9.08563 32.2807 9.4737C32.2807 9.86177 31.9663 10.1755 31.5789 10.1755H18.9474C18.56 10.1755 18.2456 9.86177 18.2456 9.4737C18.2456 9.08563 18.56 8.77194 18.9474 8.77194ZM14.5179 26.7719L9.70597 32.3853C9.56772 32.5467 9.37123 32.6309 9.17263 32.6309C9.02597 32.6309 8.87789 32.5853 8.75158 32.4905L5.54386 30.0842C5.23368 29.8519 5.17123 29.4119 5.40351 29.1025C5.63649 28.7923 6.07579 28.7305 6.38597 28.9621L9.06807 30.9733L13.4526 25.8597C13.7046 25.5649 14.1488 25.5312 14.4421 25.7839C14.7361 26.0358 14.7698 26.4779 14.5179 26.7719ZM14.5179 16.2456L9.70597 21.8597C9.56772 22.0211 9.37123 22.1053 9.17263 22.1053C9.02597 22.1053 8.87789 22.0597 8.75158 21.9649L5.54386 19.5586C5.23368 19.3263 5.17123 18.8863 5.40351 18.5769C5.63649 18.2667 6.07579 18.2042 6.38597 18.4365L9.06807 20.4477L13.4526 15.3333C13.7046 15.0386 14.1488 15.0049 14.4421 15.2576C14.7361 15.5095 14.7698 15.9516 14.5179 16.2456ZM14.5179 6.42107L9.70597 12.0351C9.56772 12.1965 9.37123 12.2807 9.17263 12.2807C9.02597 12.2807 8.87789 12.2351 8.75158 12.1404L5.54386 9.73405C5.23368 9.50177 5.17123 9.06177 5.40351 8.75229C5.63649 8.44212 6.07579 8.37966 6.38597 8.61194L9.06807 10.6232L13.4526 5.50879C13.7046 5.21405 14.1488 5.18036 14.4421 5.433C14.7361 5.68493 14.7698 6.12703 14.5179 6.42107Z" fill="white"/>
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_507_1312">
                                        <Rect width="40" height="40" fill="white"/>
                                    </ClipPath>
                                </Defs>
                            </Svg>
                            <View style={ styles.textContainer }>
                                <Text style={ [styles.textWhite, styles.propText] }>
                                    { tour.props.schedule }
                                </Text>
                            </View>
                        </View>
                        <View style={ styles.prop }>
                            <Svg style={ styles.svg }  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <G clipPath="url(#clip0_507_1355)">
                                    <Path d="M19.9999 0C8.95461 0 0.000488281 8.95438 0.000488281 19.9997C0.000488281 31.0445 8.95461 40 19.9998 40C31.0449 40 40 31.0449 40 19.9997C39.9995 8.95438 31.0452 0 19.9999 0ZM28.4169 26.04C28.4169 26.4325 27.9691 26.7637 27.4396 26.7637H10.0698C9.54006 26.7637 9.09247 26.4324 9.09247 26.04V17.6008C9.09247 17.2086 9.53993 16.8771 10.0698 16.8771H27.4395C27.969 16.8771 28.4168 17.2086 28.4168 17.6008V26.04H28.4169ZM31.875 22.5811C31.8749 22.9736 31.427 23.3052 30.8976 23.3052H30.4916V17.6006C30.4916 16.0576 29.1225 14.802 27.4395 14.802H12.5507V14.1422C12.5507 13.75 12.9981 13.4184 13.528 13.4184H30.8977C31.4272 13.4184 31.875 13.75 31.875 14.1422V22.5811Z" fill="white"/>
                                    <Path d="M18.5789 21.0938C17.7697 20.997 17.3848 20.8887 17.3848 20.5381C17.3848 19.9934 18.1822 19.9346 18.5253 19.9346C19.0322 19.9346 19.5925 20.1787 19.7741 20.4789L19.8539 20.6113L21.047 20.059L20.9691 19.9003C20.5583 19.0603 19.8325 18.803 19.2681 18.6979V17.9524H17.873V18.6938C16.6693 18.885 15.9563 19.5663 15.9563 20.5381C15.9563 22.1419 17.4557 22.3094 18.4471 22.42C19.3231 22.5238 19.7487 22.7405 19.7487 23.0829C19.7487 23.7583 18.787 23.8105 18.4921 23.8105C17.8285 23.8105 17.1901 23.4831 17.0072 23.0487L16.9397 22.8889L15.646 23.4373L15.7141 23.5968C16.0713 24.4337 16.8349 24.9621 17.873 25.0966V25.8996H19.2681V25.0565C20.2675 24.9293 21.2264 24.2868 21.2264 23.0827C21.2268 21.4195 19.6335 21.2235 18.5789 21.0938Z" fill="white"/>
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_507_1355">
                                        <Rect width="40" height="40" fill="white"/>
                                    </ClipPath>
                                </Defs>
                            </Svg>
                            <View style={ styles.textContainer }>
                                <Text style={ [styles.textWhite, styles.propText] }>
                                    { tour.props.price }
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                { button }
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    largePadding: {
        paddingHorizontal: 40,
    },
    imageBackground: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0,0,0, 0.60)',
        flex: 1,
    },
    mainText: {
        flexDirection: 'column',
    },
    mainTitle: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 26,
    },
    mainDescription: {
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
    },
    textWhite: {
        color: '#fff',
    },
    propList: {

    },
    propGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
    },
    prop: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        margin: 12,
    },
    svg: {
        alignSelf: 'center',
    },
    textContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    propText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        lineHeight: 22.5,
        textAlign: 'center',
    }
})
