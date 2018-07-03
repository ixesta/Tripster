import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Swipeout from 'react-native-swipeout'; 




export default class List extends Component {
  
    state={
        activities:[]
    }

    componentDidMount(){
        const { activities } = this.props.navigation.state.params
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
                                onPress: () => this.deleteAttraction(i, item),
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

    deleteAttraction = (i, item) => {
        const { deleteAttraction } = this.props.navigation.state.params
        deleteAttraction(item)
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