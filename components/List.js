import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Swipeout from 'react-native-swipeout'; 




export default class List extends Component {
    state = {
        names: [
            {
                id: 0,
                name: 'London Eye',
            },
            {
                id: 1,
                name: 'Big Ben',
            },
            {
                id: 2,
                name: 'Tower of London',
            },
            {
                id: 3,
                name: 'Buckingham Palace',
            }
        ]
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.names !== this.state.names) {
            this.setState({
                names: this.state.names
            })
        }
    }


    render() {
        return (
            <View>
                {
                    this.state.names.map((item, i) => (
                        <Swipeout key={i} style={styles.swipeoutView} right={[
                            {
                                text: 'delete',
                                onPress: () => this.deleteAttraction(`${i}`),
                                className: 'custom-class-2',
                                backgroundColor: '#EA0000'
                            }
                        ]}>
                            <View key={`list${i}`} style={styles.swipeoutView}>
                                < Text style={styles.text} >
                                    {item.name}
                                </Text>
                            </View>
                        </Swipeout>
                    ))
                }

               
                    <Button
                        title='TimeLines'
                        onPress={() => this.props.navigation.navigate('TimeLines')}
                    >
                    </Button>
               
          

            </View>
        )
    }
    deleteAttraction = (id) => {
        console.log(id)
        const attraction = [...this.state.names]
        const newList = attraction.filter(name => name !== attraction[id])
        this.setState({
            names: newList
        })
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF'
    },
    swipeoutView: {
        height: 80,
        backgroundColor: '#232221'
    }
})