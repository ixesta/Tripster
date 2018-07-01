import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text } from 'react-native';

const styles = {
  container: {
    position: 'absolute'
  },
};

const rightButtonConfig = {
  title: 'Map',
  handler: () => alert('Map!'),
};

const centerButtonConfig = {
  title: 'View List',
  handler: () => alert('Activities list!'),
};
const leftButtonConfig = {
  title: 'View Trip',
  handler: () => alert('Trip iTimeline!'),
};


function BottomNavBar() {
  return (
    <View >
      <NavigationBar
        style={styles.container}
        rightButton={rightButtonConfig}
        centerButton={centerButtonConfig}
        leftButton={leftButtonConfig}
      />
    </View>
  );
}



export default BottomNavBar;