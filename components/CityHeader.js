import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text, Header, Icon } from 'react-native';




export default class View3 extends Component {
  render() {
    let header = {
      name: 'London',
      avatar_url: 'https://cdn.londonandpartners.com/asset/20adda9d08e8480c6dbbfcf30fbcabdb.jpg'
    }
    return (


      <ImageBackground style={styles.city} source={{ uri: header.avatar_url }} >

        <Text style={styles.text}>{header.name}</Text>

      </ImageBackground>

    );
  }
}


const styles = StyleSheet.create({

  city: {

    borderBottomWidth: 3,
    borderBottomColor: 'white',
    marginTop: 5,
    height: 370
  }

})