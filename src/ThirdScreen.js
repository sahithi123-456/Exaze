import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Size from './utils/Size';
import Color from './utils/Color';
import {useSelector} from 'react-redux';

const ThirdScreen = ({navigation}) => {
  const {inputValue} = useSelector(state => state.demoReducer);
  return (
    <View style={styles.mainview}>
      <Text style={styles.heading}>Hello {inputValue}</Text>
      <Text style={styles.heading}>Thank You!</Text>
        <View style={styles.button}>
          <Button title="Back" onPress={() => navigation.goBack()}/>
        </View>
    </View>
  )
}

export default ThirdScreen

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
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    borderRadius: 8,
  },
})