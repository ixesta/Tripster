import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, TouchableHighlight, Text } from 'react-native';
import { Font, AppLoading } from 'expo'
import MaterialIcons from '../node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf'
import { Icon, ButtonGroup, Button, CustomIcon } from 'react-native-elements';
import CityHeader from './CityHeader';




export default class View3 extends Component {
  state = {
    activities: [],
    fontsAreLoaded: false
  }

  async componentWillMount() {
    try {
      await Font.loadAsync({
        MaterialIcons
      });
      this.setState({ fontsAreLoaded: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }

  
  render() {
    if (!this.state.fontsAreLoaded) {

      return <AppLoading />}
    
    
    const component1 = () => 
    <Button
        buttonStyle={styles.button}
        icon={{
          name: 'call-split',
          size: 15,
          color: 'white'
        }}
      title='Map'
      onPress={() => this.props.navigation.navigate('TimeLines')}
    >
    </Button>
    const component2 = () => 
      <Button
        buttonStyle={styles.button}
        icon={{
          name: 'view-list',
          size: 15,
          color: 'white'
        }}
        title='List'
        onPress={() => this.props.navigation.navigate('List')}
      >
      </Button>
    const component3 = () => 
      <Button
        buttonStyle={styles.button}
        icon={{
          name: 'launch',
          size: 15,
          color: 'white'
        }}
        title='Trip'
        onPress={() => this.props.navigation.navigate('TimeLines')}
      >
      </Button>
   
   const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]


    return (
       

      <View style={styles.container}>
        
        <CityHeader />
        
        <ButtonGroup buttonStyle={styles.button} buttons={buttons}/>
        
        <ScrollView style={styles.container}>
          {list.map((activity, i) => {
            return (

              <ImageBackground
                key={i}
                style={styles.image}
                source={{ uri: activity.imageUrl }}
              >

                <TouchableHighlight onPress={() => { this.addActivity(activity) }}>
                  <Icon name='attachment' color='#00aced' style={styles.addIcon} />
                </TouchableHighlight>
                <Text style={styles.text}>{activity.title}</Text>

              </ImageBackground>

            );
          })}
        </ScrollView>
      </View>
    );
  }


  addActivity = (activity) => {
    const { activities } = this.state
    if (activities.length === 0) {
      this.setState({ activities: [activity] })
    }
    const newActivities = [...activities]
    this.setState({ activities: [...newActivities, activity] })
  }

}

const styles = StyleSheet.create({

  container: {
    alignSelf: 'stretch',
    backgroundColor: '#00BFFF'

  },
  image: {
    flex: 2,
    height: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#00BFFF',
  },
  text: {
    textAlign: 'center',
    marginTop: 80,
    color: '#00BFFF'
  },
  popup: {
    justifyContent: 'center'

  },
  button: {
    backgroundColor: 'grey',
    borderColor: 'grey',
    borderWidth: 5,
    borderRadius: 10
    
  },
  buttongroup: {
    backgroundColor: 'grey',
    borderColor: 'grey',
    borderWidth: 5,
    borderRadius: 10
  },
});

const list = [
  { id: 1, time: '09:00', title: 'London Eye', description: 'The London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193203/Screen_Shot_2018-06-28_at_2.17.08_PM.png' },
  { id: 2, time: '11:00', title: 'Tower of London', description: 'The Tower of London is a historic castle located on the north bank of the River Thames in central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.32_PM.png' },
  { id: 3, time: '13:00', title: 'National Gallery', description: 'The National Gallery is an art museum Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.44_PM.png' },
  { id: 4, time: '15:00', title: 'Natural History Museum', description: 'The Natural History Museum in London exhibits a vast range of specimens from various segments of natural history. ', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.18.01_PM.png' },
  { id: 5, time: '17:00', title: 'Hyde Park', description: 'Hyde Park is a Grade I-listed major park in Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193251/Screen_Shot_2018-06-28_at_2.18.32_PM.png' },
  { id: 6, time: '09:00', title: 'London Eye', description: 'The London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193203/Screen_Shot_2018-06-28_at_2.17.08_PM.png' },
  { id: 7, time: '11:00', title: 'Tower of London', description: 'The Tower of London is a historic castle located on the north bank of the River Thames in central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.32_PM.png' },
  { id: 8, time: '13:00', title: 'National Gallery', description: 'The National Gallery is an art museum Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.44_PM.png' },
  { id: 9, time: '15:00', title: 'Natural History Museum', description: 'The Natural History Museum in London exhibits a vast range of specimens from various segments of natural history. ', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.18.01_PM.png' },
  { id: 10, time: '17:00', title: 'Hyde Park', description: 'Hyde Park is a Grade I-listed major park in Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193251/Screen_Shot_2018-06-28_at_2.18.32_PM.png' },
  { id: 11, time: '09:00', title: 'London Eye', description: 'The London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193203/Screen_Shot_2018-06-28_at_2.17.08_PM.png' },
  { id: 12, time: '11:00', title: 'Tower of London', description: 'The Tower of London is a historic castle located on the north bank of the River Thames in central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.32_PM.png' },
  { id: 13, time: '13:00', title: 'National Gallery', description: 'The National Gallery is an art museum Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.44_PM.png' },
  { id: 14, time: '15:00', title: 'Natural History Museum', description: 'The Natural History Museum in London exhibits a vast range of specimens from various segments of natural history. ', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.18.01_PM.png' },
  { id: 15, time: '17:00', title: 'Hyde Park', description: 'Hyde Park is a Grade I-listed major park in Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193251/Screen_Shot_2018-06-28_at_2.18.32_PM.png' },
  { id: 16, time: '09:00', title: 'London Eye', description: 'The London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193203/Screen_Shot_2018-06-28_at_2.17.08_PM.png' },
  { id: 17, time: '11:00', title: 'Tower of London', description: 'The Tower of London is a historic castle located on the north bank of the River Thames in central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.32_PM.png' },
  { id: 18, time: '13:00', title: 'National Gallery', description: 'The National Gallery is an art museum Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.44_PM.png' },
  { id: 19, time: '15:00', title: 'Natural History Museum', description: 'The Natural History Museum in London exhibits a vast range of specimens from various segments of natural history. ', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.18.01_PM.png' },
  { id: 20, time: '17:00', title: 'Hyde Park', description: 'Hyde Park is a Grade I-listed major park in Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193251/Screen_Shot_2018-06-28_at_2.18.32_PM.png' }]