import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements'
import SingleTimeLine from './SingleTimeLine';
import { timelinesGenerator } from '../utils'

export default class TimeLines extends React.Component {
    state = {
        activities: [
            { id: 1, time: '09:00', title: 'London Eye', description: 'The London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193203/Screen_Shot_2018-06-28_at_2.17.08_PM.png' },
            { id: 2, time: '11:00', title: 'Tower of London', description: 'The Tower of London is a historic castle located on the north bank of the River Thames in central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.32_PM.png' },
            { id: 3, time: '13:00', title: 'National Gallery', description: 'The National Gallery is an art museum Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.44_PM.png' },
            { id: 4, time: '15:00', title: 'Natural History Museum', description: 'The Natural History Museum in London exhibits a vast range of specimens from various segments of natural history. ', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.18.01_PM.png' },
            { id: 5, time: '17:00', title: 'Hyde Park', description: 'Hyde Park is a Grade I-listed major park in Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193251/Screen_Shot_2018-06-28_at_2.18.32_PM.png' },
            { id: 6, time: '09:00', title: 'London Eye', description: 'The London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193203/Screen_Shot_2018-06-28_at_2.17.08_PM.png' },
            { id: 7, time: '11:00', title: 'Tower of London', description: 'The Tower of London is a historic castle located on the north bank of the River Thames in central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.32_PM.png' },
            { id: 8, time: '13:00', title: 'National Gallery', description: 'The National Gallery is an art museum Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.44_PM.png' }
            // { id: 9, time: '15:00', title: 'Natural History Museum', description: 'The Natural History Museum in London exhibits a vast range of specimens from various segments of natural history. ', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.18.01_PM.png' },
            // { id: 10, time: '17:00', title: 'Hyde Park', description: 'Hyde Park is a Grade I-listed major park in Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193251/Screen_Shot_2018-06-28_at_2.18.32_PM.png' },
            // { id: 11, time: '09:00', title: 'London Eye', description: 'The London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193203/Screen_Shot_2018-06-28_at_2.17.08_PM.png' },
            // { id: 12, time: '11:00', title: 'Tower of London', description: 'The Tower of London is a historic castle located on the north bank of the River Thames in central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.32_PM.png' },
            // { id: 13, time: '13:00', title: 'National Gallery', description: 'The National Gallery is an art museum Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.44_PM.png' },
            // { id: 14, time: '15:00', title: 'Natural History Museum', description: 'The Natural History Museum in London exhibits a vast range of specimens from various segments of natural history. ', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.18.01_PM.png' },
            // { id: 15, time: '17:00', title: 'Hyde Park', description: 'Hyde Park is a Grade I-listed major park in Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193251/Screen_Shot_2018-06-28_at_2.18.32_PM.png' },
            // { id: 16, time: '09:00', title: 'London Eye', description: 'The London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193203/Screen_Shot_2018-06-28_at_2.17.08_PM.png' },
            // { id: 17, time: '11:00', title: 'Tower of London', description: 'The Tower of London is a historic castle located on the north bank of the River Thames in central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.32_PM.png' },
            // { id: 18, time: '13:00', title: 'National Gallery', description: 'The National Gallery is an art museum Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.17.44_PM.png' },
            // { id: 19, time: '15:00', title: 'Natural History Museum', description: 'The Natural History Museum in London exhibits a vast range of specimens from various segments of natural history. ', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193252/Screen_Shot_2018-06-28_at_2.18.01_PM.png' },
            // { id: 20, time: '17:00', title: 'Hyde Park', description: 'Hyde Park is a Grade I-listed major park in Central London.', imageUrl: 'https://res.cloudinary.com/dbg0gmsjs/image/upload/v1530193251/Screen_Shot_2018-06-28_at_2.18.32_PM.png' }

        ],
        limit: 2,
        timeline: [],
        buttons: 0,
        selectedIndex: 0
    }

    componentDidMount() {
        
        const NumOfDays = Math.round(this.state.activities.length / this.state.limit)
        const buttons = []
        for (let i = 0; i < NumOfDays; i++) {
            buttons.push(`Day${i + 1}`)
        }
        this.setState({ buttons })

    }


    render() {

        const NumOfDays = Math.round(this.state.activities.length / this.state.limit)
        const buttons = []
        for (let i = 0; i < NumOfDays; i++) {
            buttons.push(`Day${i + 1}`)
        }

        return (
            <View style={styles.container}>

                {this.state.timeline.length > 1 &&
                    <SingleTimeLine timeline={this.state.timeline} generateTimeLine={this.state.generateTimeLine} />
                }
                <ButtonGroup
                    onPress={this.generateTimeLine}
                    selectedIndex={this.state.selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 50 }}
                />
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



