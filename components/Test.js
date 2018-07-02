import React, { Component } from 'react';
import { View, ImageBackground, Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';
import { Font, AppLoading } from 'expo'
import MaterialIcons from '../node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf'


export default class Test extends Component {
    
    state={
        items: []
    }

    componentDidMount = async () => {
        const {city} = this.props.navigation.state.params
        const { items } = await this.getPlaces(city)
        this.setState({ items })
       
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

            return <AppLoading />
        }


        const { items } = this.state
        return (

            <View>
                <Text>Test</Text>
            </View>

        );
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