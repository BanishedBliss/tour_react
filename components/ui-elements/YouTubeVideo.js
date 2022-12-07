import React from "react";
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {backendUrl} from "../../App";

export default function YouTubeVideo({ videoId, title, style }) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => { Linking.openURL('https://www.youtube.com/watch?v=' + videoId) }
            }
            style={ [ styles.container, style] }>

            <Text style={ styles.title } numberOfLines={1}>{ title }</Text>
            <Image source={{uri: 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg' }}
                   style={ styles.videoImage }/>
            <View style={ styles.playBtnBox }>
                <Image source={{uri: backendUrl + '/storage/appImages/youtube-play-button.png'}}
                       style={ styles.playBtn}/>
            </View>
            <View style={ styles.watchOnYoutube}>
                <Text style={styles.youtubeText }>Посмотреть на</Text>
                <Image source={{ uri: backendUrl + '/storage/appImages/youtube-white-logo.png' }}
                       style={ styles.youtubeLogo }/>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    videoImage: {
        width: '100%',
        aspectRatio: 310/173
    },
    title: {
        position: 'absolute',
        left: 24,
        top: 12,
        marginRight: 32,
        zIndex: 2,
        color: '#fff',
    },
    playBtnBox: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playBtn: {
        width: 48,
        aspectRatio: 512/386,
    },
    watchOnYoutube: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        padding: 6,
        backgroundColor: 'rgba(0,0,0, 0.7)',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
    },
    youtubeText: {
        color: '#fff',
        fontFamily: 'DMSans-Bold',
        lineHeight: 24,
        fontSize: 11,
    },
    youtubeLogo: {
        height: 22,
        aspectRatio: 850/311,
    }
})
