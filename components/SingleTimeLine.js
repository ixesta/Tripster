import React from 'react';
import Timeline from 'react-native-timeline-listview'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import openMap from 'react-native-open-maps'



export default class SingleTimeLine extends React.Component {
    state = {
        isDateTimePickerVisible: false,
        selected: null,
        category: 3
    }



    componentWillMount() {
        this.setState({ isDateTimePickerVisible: false })

    }



    _showDateTimePicker = (rowData) => {
        this.setState({ isDateTimePickerVisible: true, selected: rowData })
    }

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        const time = moment(date).format('hh:mm')
        const activities = this.state.activities.map((activity) => {
            if (activity.id === this.state.selected.id) activity = { ...activity, time }
            return activity
        })
        this.setState({ selected: null, activities })
        this._hideDateTimePicker();
    };


    
    render() {

        return (

            <View style={styles.container}>

                <Timeline
                    style={styles.list}
                    data={this.props.timeline.map((activity, i) => {

                        return ({
                            time: activity.time,
                            title: activity.title,
                            id: activity.id,
                            description: activity.description,
                            imageUrl: activity.imageUrl

                        }
                        )
                    })}
                    renderTime={this.renderTime}
                    onEventPress={this.onEventPress}
                    renderDetail={this.renderDetail}
                    circleSize={20}
                    circleColor='rgb(45,156,219)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                    timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
                    descriptionStyle={{ color: 'gray' }}
                    options={{
                        style: { paddingTop: 5 }
                    }}
                />

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='time'
                    minuteInterval={30}
                />


            </View>
        );
    }

    onEventPress(rowData) {

        openMap({ provider: 'google', query: `${rowData.title}` })
    }

    renderTime = (rowData, sectionID, rowID) => {

        let time = <Text >{rowData.time}</Text>
        return (
            <View >
                <TouchableOpacity onPress={() => this._showDateTimePicker(rowData)}>
                    {time}
                </TouchableOpacity>
            </View>

        )
    }

    renderDetail = (rowData, sectionID, rowID) => {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>
        var desc = null
        if (rowData.description && rowData.imageUrl)
            desc = (
                <View style={styles.descriptionContainer}>
                    <Image source={{ uri: rowData.imageUrl }} style={styles.image} />
                    <Text style={[styles.textDescription]}>{rowData.description}</Text>
                </View>
            )

        return (
            <View style={{ flex: 1 }}>
                {title}
                {desc}
            </View>
        )
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












