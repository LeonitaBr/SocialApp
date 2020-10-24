import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";

const Story = ({ source, style, imgStyle, tintColor }) => {

    return (
        <Pressable style={{ ...styles.storyContainer, ...style }}>
            <Image style={{ ...styles.storyImage, ...imgStyle }} tintColor={tintColor} source={source} />
        </Pressable>
    )
}

export { Story };

const styles = StyleSheet.create({
    storyContainer: {
        margin: 5,
        borderWidth: 2,
        borderColor: '#ff9fc8',
        overflow: 'hidden',
        borderRadius: 54,
        height: 98,
        width: 98,
    },
    storyImage: {
        width: '100%',
        height: '100%'
    }
})
