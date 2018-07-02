import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text, Header, Icon } from 'react-native';




export default class View3 extends Component {
  
  render() {
    let header = {
      name: 'London',
      avatar_url: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530394295/Screen_Shot_2018-06-30_at_10.30.50_PM.png'
    }
    return (

      <View>
      <Image style={styles.city} source={{ uri: header.avatar_url }} />
        <Text style={styles.text}>London</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  city: {

    // borderBottomWidth: 3,
    borderColor: 'white',
    marginTop: 5,
    height: 100,
    borderWidth: 5
  },
  text: {
    position: 'absolute', 
    top: 40, 
    left: 140, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'bold'
  }

})

  // < Text style = { styles.text } > { header.name }</Text>