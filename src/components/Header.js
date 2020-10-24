import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { fonts } from "../constants/fonts";
import { Images } from "../constants/images";

const Header = () => {
    
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.title}>Hello,</Text>
                <Text style={styles.name}>Alvarado</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.profileImage}  source={Images.profile4}/>
            </View>
        </View>
    )
}

export {Header};

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        flexDirection: "row",
        padding: 20,
        alignItems:'center'
    },
    title: {
        fontSize: 16,
        fontFamily:fonts.regular,
        color: '#8aa5d4'
    },
    name: {
        fontSize: 22,
        fontFamily:fonts.bold,
        color: '#0a2549'
    },
    imageContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow:'hidden'
      
    },
    profileImage:{
        borderRadius:60,
        resizeMode:'cover',
        width:'100%', 
        height:'100%'
    }
})
