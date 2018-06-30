import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator.js';
import CityList from '../components/CityList'

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
     CityList: {
      screen: CityList,
      navigationOptions: {
        swipeEnabled: false
      }
    },
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator/>;
  }
}