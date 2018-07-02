import React from 'react'
import Home from '../components/Home'
import TimeLines from '../components/TimeLines'
import { TabNavigator } from 'react-navigation'




export default TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      }
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: 'top',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 75
      },
    }
  }
);