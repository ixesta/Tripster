import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, TouchableHighlight, StyleSheet, Text, Alert } from 'react-native';

const list = [
    {
        name: 'London',
        avatar_url: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530394295/Screen_Shot_2018-06-30_at_10.30.50_PM.png'

    },
    {
        name: 'Manchester',
        avatar_url: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530394297/Screen_Shot_2018-06-30_at_10.30.06_PM.png'

    },
    {
        name: 'Liverpool',
        avatar_url: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530394314/Screen_Shot_2018-06-30_at_10.29.20_PM.png'

    },
    {
        name: 'Leeds',
        avatar_url: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530394295/Screen_Shot_2018-06-30_at_10.28.08_PM.png'

    },
    {
        name: 'Birmingham',
        avatar_url: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530394295/Screen_Shot_2018-06-30_at_10.26.46_PM.png'

    }

]


export default class CityList extends Component {
    render() {
        return (

            <View>
                <ScrollView>
                    {list.map((city, i) => {
                        return (
                            <TouchableHighlight key={`touch${i}`} onPress={this._onPressButton} underlayColor="white">
                                <ImageBackground
                                    key={i}
                                    style={styles.image}
                                    source={{ uri: city.avatar_url }}
                                >
                                    <Text key={`text${i}`} style={styles.headline}>{city.name}</Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        );
                    })}
                </ScrollView>
            </View>

        );
    }
    _onPressButton = () => {
        this.props.navigation.navigate('AddActivities')
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: '100%',
        height: 150,
    },
    headline: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        marginTop: 70,
        fontWeight: 'bold'

    }
});