import React from "react";
import {  StyleSheet, View } from "react-native";


const Cart = ({ children, style }) => {

    return (
        <View style={{...styles.cartContainer, ...style}}>
            {children}
        </View>
    )
}

export {Cart};

const styles = StyleSheet.create({
    cartContainer: {
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.11,
        shadowRadius: 9.11,
        shadowColor: "#fff",
        elevation: 14,
        borderRadius: 15,
        overflow:'hidden',
        margin:20,
    },
})
