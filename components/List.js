import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Swipeout from 'react-native-swipeout'; 




export default class List extends Component {
  
    state={
        activities:[]
    }

    componentDidMount(){
        const { activities } = this.props.navigation.state.params
        console.log(activities)
        this.setState({activities})
    }
    

    render() {
        const { activities } = this.state
        
        return (
            <View>
                {   
                    activities.length >= 1 &&
                    activities.map((item, i) => (
                        <Swipeout key={i} style={styles.swipeoutView} right={[
                            {
                                text: 'delete',
                                onPress: () => this.deleteAttraction(i),
                                className: 'custom-class-2',
                                backgroundColor: '#EA0000'
                            }
                        ]}>
                            <View key={`list${i}`} style={styles.swipeoutView}>
                                < Text style={styles.text} >
                                    {item.title}
                                </Text>
                            </View>
                        </Swipeout>
                    ))
                }

               
                    <Button
                        title='TimeLines'
                    onPress={() => this.props.navigation.navigate('TimeLines', { activities: activities})}
                    >
                    </Button>
               
          

            </View>
        )
    }

    deleteAttraction = (i) => {
        const { deleteAttraction } = this.props.navigation.state.params
        deleteAttraction(i)
        const activities = [...this.state.activities]
        activities.splice(i, 1)
        this.setState({
            activities
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