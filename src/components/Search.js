import React from "react";
import { Pressable, StyleSheet, TextInput, View, Dimensions, Text } from "react-native";
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated
import Icon from 'react-native-vector-icons/AntDesign'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { fonts } from "../constants/fonts";
const width = Dimensions.get('window').width

const Search = () => {

    const button_box_translate_x = new Value(0);
    const button_box_opacity = new Value(1);
    const text_translate_width = new Value(400);
    const remove_button_opacity = new Value(0);
    const input_box_initial_width = new Value(0);

    const showSearchBoxHandler = () => {
        const button_box_translate_x_config = {
            duration: 1200,
            toValue: width - 110,
            easing: Easing.inOut(Easing.ease)
        }
        const input_box_width_config = {
            duration: 1300,
            toValue: width-40,
            easing: Easing.inOut(Easing.ease)
        }
       
        const button_box_opacity_config = {
            duration: 1200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }
        
        const remove_button_box_opacity_config = {
            duration: 1600,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }

        const text_translate_config = {
            duration: 600,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }

        timing(button_box_translate_x, button_box_translate_x_config).start();
        timing(input_box_initial_width, input_box_width_config).start();
        timing(button_box_opacity, button_box_opacity_config).start();
        timing(remove_button_opacity, remove_button_box_opacity_config).start();
        timing(text_translate_width, text_translate_config).start();
    }

    const removeSearchBarHandler = () => {

        const button_box_translate_x_config = {
            duration: 1300,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }

        const button_box_opacity_config = {
            duration: 1200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }

        const remove_button_box_opacity_config = {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }
        const text_translate_config = {
            duration: 400,
            toValue: 400,
            easing: Easing.inOut(Easing.ease)
        }

        const input_box_width_config = {
            duration: 1300,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }

        timing(button_box_translate_x, button_box_translate_x_config).start();
        timing(input_box_initial_width, input_box_width_config).start();
        timing(button_box_opacity, button_box_opacity_config).start();
        timing(remove_button_opacity, remove_button_box_opacity_config).start();
        timing(text_translate_width, text_translate_config).start();

    }

    return (
        <View style={styles.inputContainer}>
            <Animated.View style={{ width: input_box_initial_width, height:70, overflow:'hidden'  }} >
                <TextInput
                    fontSize={18}
                    fontFamily={fonts.bold}
                    placeholderTextColor="#FFF"
                    placeholder="Search Friend"
                    style={[styles.input,{paddingHorizontal:30, color:'#fff'}]} />
            </Animated.View>
             <Animated.View style={[
                { width: text_translate_width }, styles.animatedText]}>
                <Text style={[styles.input, styles.text]}>Search Friend</Text>
            </Animated.View> 
            <Animated.View style={[{
                position: 'absolute',
                height: 50,
                zIndex: 9999,
                // paddingRight:20
            },
            { transform: [{ translateX: button_box_translate_x }] },
            { opacity: button_box_opacity }]}>
                <Pressable style={styles.searchButton} onPress={showSearchBoxHandler} >
                    <Icon name="search1" size={23} color={'#fff'} />
                </Pressable>
            </Animated.View>
            <Animated.View
                style={[styles.removeAnimatedContainer,
                { opacity: remove_button_opacity }]}>
                <Pressable
                    style={[styles.searchButton, styles.removeSearchButton]}
                    onPress={removeSearchBarHandler} >
                    <View >
                        <FontIcon name="remove" size={15} color={'#aaa'} />
                    </View>
                </Pressable>
            </Animated.View>
        </View>
    )
}

export { Search };

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        position: 'relative',
        height: 70,
    },
    searchButton: {
        backgroundColor: '#ff7bab',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 25,
        left: 0,
        marginLeft: 20,
        height: 50,
        width: 50,
        
    },
    input_box: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        top: 0,
        left: 0,
        borderRadius: 25,
        position: 'absolute',
    },
    input: {
        width: '100%',
        backgroundColor: '#ff7bab',
        flex: 1,
    },
    removeAnimatedContainer: {
        position: 'absolute',
        height: 50,
        right: 10,
        zIndex: 9999999, justifyContent: 'center'
    }, animatedText: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        textAlign: 'center',
        color: '#9ab1da',
        fontFamily: fonts.regular,
        fontSize: 16
    },
    removeSearchButton: {
        backgroundColor: '#ddd',
        zIndex: 9999,
        height: 30,
        width: 30
    }

})