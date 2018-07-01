import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator.js';
import CityList from '../components/CityList'
import List from '../components/List'
import TimeLines from '../components/TimeLines'
import AddActivities from '../components/AddActivities'



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
    List: {
      screen: List,
      navigationOptions: {
        swipeEnabled: false
      }
    },
    TimeLines: {
      screen: TimeLines,
      navigationOptions: {
        swipeEnabled: false
      }
    },
    AddActivities: {
      screen: AddActivities,
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