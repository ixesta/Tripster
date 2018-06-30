import React from 'react'
import {View, Button} from 'react-native'



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
