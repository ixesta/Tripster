import React from 'react'
import Home from '../components/Home'
import TimeLines from '../components/TimeLines'
import CityList from '../components/CityList'
import { TabNavigator } from 'react-navigation'



export default TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      }
    },
    // CityList: {
    //   screen: CityList,
    //   navigationOptions: {
    //     swipeEnabled: false
    //   }
    // },
    // TimeLines: {
    //   screen: TimeLines,
    //   navigationOptions: {
    //     tabBarLabel: 'TimeLines',
    //     swipeEnabled: false
    //   }
    // },
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