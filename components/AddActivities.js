import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, TouchableHighlight, Text} from 'react-native';
import { Font, AppLoading } from 'expo'
import MaterialIcons from '../node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf'
import { Card, ListItem, Icon, ButtonGroup, Button, CustomIcon } from 'react-native-elements';
import CityHeader from './CityHeader';





export default class AddActivities extends Component {
  state = {
    items: [],
    activities: [],
    fontsAreLoaded: false
  }

  componentDidMount = async () => {

      try {
        const { city } = this.props.navigation.state.params
        const { items } = await this.getPlaces(city)
        await Font.loadAsync({MaterialIcons});
        this.setState({ fontsAreLoaded: true, items })
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
          size: 35,
          color: '#00BFFF'
        }}
      // title='Map'
        onPress={() => this.props.navigation.navigate('List', { activities: this.state.activities, deleteAttraction: this.deleteAttraction }) }
    >
    </Button>
    const component2 = () => 
      <Button
        buttonStyle={styles.button}
        icon={{
          name: 'format-list-bulleted',
          size: 35,
          color: '#00BFFF'
        }}
        // title='List'
        onPress={() => this.props.navigation.navigate('List', { activities: this.state.activities, deleteAttraction: this.deleteAttraction })}
      >
      </Button>
    const component3 = () => 
      <Button
        buttonStyle={styles.button}
        icon={{
          name: 'flight-takeoff',
          size: 35,
          color: '#00BFFF'
        }}
        // title='Trip'
        onPress={() => this.props.navigation.navigate('TimeLines')}
      >
      </Button>
   
   const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]

    const list = this.state.items    
    return (
       

      <View style={styles.container}>
        
        <CityHeader />
        
        <ButtonGroup buttonStyle={styles.button} buttons={buttons}/>
        
        
        <ScrollView style={styles.container}>
          {list.map((activity, i) => {
            return (

              <Card
              key={i}
                title={activity.title}
                image={{ uri: activity.imageUrl }}>
                <Text style={{ marginBottom: 10 }}>
                  {activity.description}
                </Text>
                
                <Button onPress={() => { this.addActivity(activity) }}
                  icon={<Icon name='add' style={styles.addIcon} />}
                  backgroundColor='#00BFFF'
                  // buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                  buttonStyle={styles.button}
                  title='add to list'
                  
                  />
                  
              </Card>





              // <ImageBackground
              //   key={i}
              //   style={styles.image}
              //   source={{ uri: activity.imageUrl }}
              // >

              //   <TouchableHighlight onPress={() => { this.addActivity(activity) }}>
              //     <Icon name='add' color='#00BFFF' style={styles.addIcon} />
              //   </TouchableHighlight>
              //   <Text style={styles.text}>{activity.title}</Text>

              // </ImageBackground>

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

  deleteAttraction = (i) => {
    const activities = [...this.state.activities]
    activities.splice(i, 1)  
    this.setState({
      activities
    })
  
  }

  getPlaces = async (city) => {

    try {
      let response = await fetch(
        `https://be-travel-planning-app.herokuapp.com/api/cities/${city}/places`
      );
      let responseJson = await response.json();
      return responseJson;

    } catch (error) {
      console.error(error);
    }
  }


}

const styles = StyleSheet.create({

  container: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    borderBottomRightRadius: 200


  },
  image: {
    flex: 2,
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: 'yellow',
    flexDirection: 'row'

  },

  text: {
    textAlign: 'center',
    marginTop: 80,
    color: '#00BFFF',
    fontSize: 25,
  },

  popup: {
    justifyContent: 'center'
  },

  button: {
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderRadius: 1,
    borderBottomRightRadius: 200
    
  },
  buttongroup: {
    backgroundColor: 'black',
    borderColor: 'black',
  },

  addIcon: {
    marginLeft: 3,
    marginTop: 120
  }
});
