import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements'
import SingleTimeLine from './SingleTimeLine';
import { timelinesGenerator } from '../utils'

export default class TimeLines extends React.Component {
    state = {
        activities: {
            Day1:
                [{
                    id: 1,
                    title: 'CROWNE PLAZA HOTEL',
                    time: '09:00',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 2,
                    title: 'Manchester Cathedral',
                    time: '09:04',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 3,
                    title: 'Royal Exchange Theatre',
                    time: '11:05',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 4,
                    title: 'Manchester Town Hall',
                    time: '13:09',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 5,
                    title: 'CROWNE PLAZA HOTEL',
                    time: '15:13',
                    description: '',
                    imageUrl: ''
                }],
            Day2:
                [{
                    id: 1,
                    title: 'CROWNE PLAZA HOTEL',
                    time: '09:00',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 2,
                    title: 'Manchester Arndale',
                    time: '09:08',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 3,
                    title: 'Palace Theatre',
                    time: '11:14',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 4,
                    title: 'Manchester Art Gallery',
                    time: '13:17',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 5,
                    title: 'CROWNE PLAZA HOTEL',
                    time: '15:20',
                    description: '',
                    imageUrl: ''
                }],
            Day3:
                [{
                    id: 1,
                    title: 'CROWNE PLAZA HOTEL',
                    time: '09:00',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 2,
                    title: 'John Rylands Library',
                    time: '09:06',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 3,
                    title: 'Museum of Science and Industry',
                    time: '11:10',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 4,
                    title: 'CROWNE PLAZA HOTEL',
                    time: '13:18',
                    description: '',
                    imageUrl: ''
                }],
            Day4:
                [{
                    id: 1,
                    title: 'CROWNE PLAZA HOTEL',
                    time: '09:00',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 2,
                    title: 'Manchester Arena',
                    time: '09:03',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 3,
                    title: 'The Printworks',
                    time: '11:04',
                    description: '',
                    imageUrl: ''
                },
                {
                    id: 4,
                    title: 'CROWNE PLAZA HOTEL',
                    time: '13:06',
                    description: '',
                    imageUrl: ''
                }],
            buttons: ['Day 1', 'Day 2', 'Day 3', 'Day 4']
        },
        limit: 2,
        timeline: [],
        buttons: 0,
        selectedIndex: 0
    }

    componentDidMount() {
        
        const buttons = [...this.state.activities.buttons]
        this.setState({ buttons })

    }


    render() {
    
        const {buttons} = this.state
        
        return (
            <View style={styles.container}>

                
                
                
            {this.state.buttons.length >= 1 &&
            <ButtonGroup
                onPress={this.generateTimeLine}
                selectedIndex={this.state.selectedIndex}
                buttons={buttons}
                containerStyle={{ height: 50 }}
            />}
                
            </View>
        );
    }
    generateTimeLine = (selectedIndex) => {
        this.setState({ selectedIndex })
        const activities = [...this.state.activities]
        const { limit } = this.state
        const timeline = timelinesGenerator(activities, limit, selectedIndex)
        this.setState({ timeline })
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 65,
        backgroundColor: 'white'
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingRight: 50,
        marginRight: 10,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#e6f5ff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3D3D3'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textDescription: {
        marginLeft: 10,
        color: 'gray'
    }
});



