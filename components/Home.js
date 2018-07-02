import React from 'react'
import { View, Button, Image, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Font } from 'expo'
import Zocial from '../node_modules/@expo/vector-icons/fonts/Zocial.ttf'

Font.loadAsync('Zocial', '../node_modules/@expo/vector-icons/fonts/Zocial.ttf')

export default class Home extends React.Component {

  render() {
    return (

      <View>
        <TouchableHighlight style={styles.logoContainer} onPress={() => this.props.navigation.navigate('CityList')} >
          <Image style={styles.logo} source={require('../public/logo.png')} />
        </TouchableHighlight>
        <Text style={styles.text}>Tripster</Text>
        {/* <Image source={require('../public/skyline.png')} style={styles.skyline} /> */}
      </View >

    )
  }
}

const styles = StyleSheet.create({
  logoContainer: {

  },
  logo: {
    marginTop: 0,
    alignSelf: 'stretch',
    width: 350,
    height: 300
  },
  text: {
    alignSelf: 'center',
    color: '#29a8c8',
    fontFamily: 'Noteworthy',
    fontSize: 50
  },
  skyline: {
    alignSelf: 'center',
    marginBottom: 0,
    height: 300,
    width: 370
  }

})