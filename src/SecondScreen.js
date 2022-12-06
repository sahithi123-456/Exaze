import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Size from './utils/Size';
import Color from './utils/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slide-to-unlock';


const SecondScreen = ({navigation}) => {
    const {inputValue} = useSelector(state => state.demoReducer);
    const button1EventHandler = () => {

    }
  
  return (
    <View style={styles.mainview}>
      <Text style={styles.heading}>Hello {inputValue}!</Text>
      {/* <Icon name="phone" style={styles.logo} size={30} color="#ffffff" /> */}
        <View style={styles.buttonview}>
          <Text style={styles.buttonheading}>4 Variations of a button</Text>
          <TouchableOpacity 
          style={styles.button1}
          onPress={button1EventHandler}
          >
            <Text style={styles.button1text}>PressMe</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button2}
          onPress={button1EventHandler}
          >
            <Text style={styles.button1text}>PressMe</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button3}
          onPress={button1EventHandler}
          >
            <Text style={styles.button3text}>PressMe</Text>
          </TouchableOpacity>
          <Slider
              childrenContainer={{ backgroundColor: Color.BLACK }}
              onEndReached={() => {
              // Alert.alert('Attention', 'onEndReached!');
              navigation.navigate('ThirdScreen')
              }}
                containerStyle={{
                  margin: 2,
                  backgroundColor: Color.BLACK,
                  borderRadius: 8,
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  marginLeft: 22,
                  marginTop: 18
                }}
              sliderElement={
                <View style={{
                    width: 50,
                    margin: 4,
                    borderRadius: 8,
                    height: 50,
                    backgroundColor: Color.BLUE,
                  }}>
                <Icon name="diamond" style={{
                    alignSelf:'center',
                    marginTop:8
                  }} size={30} color="#ffffff" />
                  </View>
              }
            >
              <Text style={{color: Color.BLUE, fontSize: Size.BUTTON_TEXT}}>{'Slide me to continue'}</Text>
            </Slider>
        </View>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({
  mainview :{
    flex: 1,
    backgroundColor: Color.BACKGROUND
  },
  heading: {
    fontSize: Size.MAIN_HEADING,
    color: Color.WHITE,
    margin: 12,
    textAlign:'center'
  },
  buttonheading: {
    fontSize: Size.BUTTON_TEXT,
    color: Color.YELLOW,
    alignSelf:'center'
  },
  button1text: {
    fontSize: Size.BUTTON_TEXT,
    color: Color.BLUE,
    alignSelf:'center'
  },
  button3text: {
    fontSize: Size.BUTTON_TEXT,
    color: Color.WHITE,
    alignSelf:'center'
  },
  button1: {
    backgroundColor: Color.BACKGROUND,
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    borderWidth: 0.2,
    marginTop: 48
  },
  button2: {
    backgroundColor: Color.BUTTONBG,
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    width: '90%',
    borderRadius: 8,
    padding: Size.BUTTON_PADDING,
    marginTop: 18
  },
  button3: {
    backgroundColor: Color.BLUE,
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    width: '90%',
    borderRadius: 8,
    padding: Size.BUTTON_PADDING,
    marginTop: 18
  },
  buttonview : {
    // marginTop:'100%'
    width: '100%',
    //height: 50,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: '10%'
  }
})