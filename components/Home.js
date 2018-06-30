import React from 'react'
import {View, Text, Button} from 'react-native'
import { TabNavigator } from 'react-navigation';


export default class Home extends React.Component {

  render() {
    return (
     
      <View>
          <Button
          title= 'CityList'
          onPress={() => this.props.navigation.navigate('CityList')}
          >
          </Button>
        </View>
    
    )
  }
}
