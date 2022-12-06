import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from './utils/Color'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setInputValue} from './redux/actions'

const FirstScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const onPressHandler = () => {
        if (name === '') {
            Alert.alert('Please enter your name')
        }
        else {
            dispatch(setInputValue(name))
            navigation.navigate('SecondScreen')
        }
    }
    const [name, setName] = useState('')
    const value = value => {
        setName(value)
    }
  return (
    <View style={styles.mainview}>
    <TextInput
      style={styles.textinput}
      placeholderTextColor={'#D3D3D3'}
      placeholder="Enter your name!"
      onChangeText={value}
    //   defaultValue=""
    />
    <TouchableOpacity onPress={onPressHandler} style={styles.button}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
    mainview: {
        backgroundColor: Color.BACKGROUND,
        flex: 1,
      },
      textinput: {
        textAlign: 'center',
        height: 48,
        borderWidth: 2,
        borderColor: Color.PRIMARY,
        borderRadius: 10,
        marginBottom: 22,
        width: 244,
        alignSelf: 'center',
        color:Color.WHITE,
        marginTop:'70%',
        fontSize: 22
      },
      button: {
        backgroundColor: Color.BLUE,
        width: 150,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 15,
        color: Color.WHITE,
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
})