import React from 'react';
import {  StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header, Search, List, Cart } from "components";
import { Images } from "./src/constants/images";
import { Story } from './src/components/Story';
import Data from './src/constants/dummyData';
import { fonts } from './src/constants/fonts';

const App = () => {

  return (

    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#fafaff', '#f5f9fe', '#d1deef']}
        style={styles.gradient} />
      <Header />
      <Cart style={styles.searchCart}>
        <Search />
      </Cart>
      <List
        style={styles.list}
        orientation={true}
        data={Data}
        renderItem={({ item }) => {
          return (
            <View>
              {item.id === 1 ?
                  <Cart style={styles.storyCart}>
                    <Story
                      style={styles.storyContainer}
                      tintColor={'#b6c6e2'}
                      source={item.profile}
                      imgStyle={styles.icon} />
                  </Cart>
                  :
                  <Story source={item.profile} /> }
            </View>
          )}}
      />
      <Cart>
        <View >
          <Image style={styles.image} source={Images.profile2} />
          <View style={{ ...styles.imageDetails, ...styles.styleView }}>
            <View style={styles.styleView}>
              <View style={styles.profileImgContainer}>
                <Image style={styles.profileImage} source={Images.profile4} />
              </View>
              <View style={styles.userData}>
                <Text style={styles.name}>Leonita</Text>
                <Text style={styles.time}>32 min</Text>
              </View>
            </View>
            <View>
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </View>
      </Cart>
    </ScrollView>


  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%'
  },
  list: {
    paddingLeft: 10,
    height: 130,
    flexGrow: 0,
    // backgroundColor:'green', 
  },
  image: {
    height: 350,
    width: '100%'
  },
  name: {
    fontFamily: fonts.regular,
    color: '#0a2549',
    fontSize: 18, paddingBottom: 3

  },
  time: {
    fontFamily: fonts.light,
    color: '#0a2549',
    fontSize: 14,
    paddingBottom: 3
  },
  dot: {
    backgroundColor: '#1d3657',
    overflow: 'hidden',
    marginVertical: 5,
    borderRadius: 2.5,
    height: 5,
    width: 5,
  },
  profileImgContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden'

  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  imageDetails: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: "center",
    padding: 20,
  },
  styleView: {
    flexDirection: 'row',
    alignItems: "center",
  },
  userData: {
    marginHorizontal: 20
  },
  searchCart: { borderRadius: 15, overflow: 'hidden' },
  storyContainer: {
    width: '100%', height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  storyCart: {
    borderRadius: 52, margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: 94,
    height: 94
  },

  icon: { width: 30, height: 30 }


});


export default App;
