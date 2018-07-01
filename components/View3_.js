import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text, Header } from 'react-native';
import { Icon } from 'react-native-elements';



export default class View3 extends Component {
    state = {
        activities: []
    }
    render() {
        
        return (

            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {list.map((activity, i) => {
                        return (

                            <ImageBackground
                                key={i}
                                style={styles.image}
                                source={{ uri: activity.icon }}
                            >

                                <TouchableHighlight onPress={() => { this.addActivity(activity) }}>
                                    <Text style={styles.text}>Click to Add</Text>
                                </TouchableHighlight>
                                <Text style={styles.text}>{activity.title}</Text>

                             </ImageBackground>

                        );
                    })}
                </ScrollView>
            
            </View>
        );
    }

    // fetchData = async () => {

    //   const { data } = await axios.get(`database call sorted by city`)
    //   return data;


    // }
    // componentDidMount = async () => {
    //   const { activities } = await this.fetchData()
    // }

    addActivity = (activity) => {
        const { activities } = this.state
        if (activities.length === 0){
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
    text:{
        color: 'white'
    }
});



const list = [
    {
        "position": [
            53.47905,
            -2.24775
        ],
        "distance": 65,
        "title": "The Venue",
        "averageRating": 0,
        "category": {
            "id": "theatre-music-culture",
            "title": "Theatre, Music & Culture",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/theatre-music-culture?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/05.icon",
        "vicinity": "29 Jacksons Row<br/>Manchester<br/>Manchester",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-f110d7ffcad440e4babfd696fe3e9c14;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0w?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "id": "826gcw2h-f110d7ffcad440e4babfd696fe3e9c14",
        "openingHours": {
            "text": "Wed: 21:00 - 03:00<br/>Thu: 23:00 - 03:00<br/>Fri, Sat: 22:30 - 03:00",
            "label": "Opening hours",
            "isOpen": false,
            "structured": [
                {
                    "start": "T210000",
                    "duration": "PT06H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:WE"
                },
                {
                    "start": "T230000",
                    "duration": "PT04H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:TH"
                },
                {
                    "start": "T223000",
                    "duration": "PT04H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                }
            ]
        }
    },
    {
        "position": [
            53.479851,
            -2.248362
        ],
        "distance": 69,
        "title": "Australasia",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "Deansgate<br/>Manchester Central<br/>Manchester<br/>M3 3WR",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-25bf964e8ab10661fe2c2e84aefd06b1;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0x?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "asian",
                "title": "Asian",
                "group": "cuisine"
            },
            {
                "id": "australian",
                "title": "Australian",
                "group": "cuisine"
            },
            {
                "id": "european",
                "title": "European",
                "group": "cuisine"
            },
            {
                "id": "fusion",
                "title": "Fusion",
                "group": "cuisine"
            },
            {
                "id": "indonesian",
                "title": "Indonesian",
                "group": "cuisine"
            },
            {
                "id": "japanese",
                "title": "Japanese",
                "group": "cuisine"
            },
            {
                "id": "sushi",
                "title": "Japanese - Sushi",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-25bf964e8ab10661fe2c2e84aefd06b1",
        "openingHours": {
            "text": "Mon-Wed, Sun: 12:00 - 00:00<br/>Thu: 12:00 - 01:00<br/>Fri, Sat: 12:00 - 03:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T120000",
                    "duration": "PT12H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,SU"
                },
                {
                    "start": "T120000",
                    "duration": "PT13H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:TH"
                },
                {
                    "start": "T120000",
                    "duration": "PT15H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                }
            ]
        }
    },
    {
        "position": [
            53.4797,
            -2.24611
        ],
        "distance": 86,
        "title": "Veeno",
        "averageRating": 0,
        "category": {
            "id": "going-out",
            "title": "Going Out",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/going-out?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/05.icon",
        "vicinity": "Brazennose Street<br/>Manchester<br/>Manchester<br/>M60 8",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-ea179a082bd84dcda12398ef4def3e7a;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0y?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "italian",
                "title": "Italian",
                "group": "cuisine"
            },
            {
                "id": "tapas",
                "title": "Tapas",
                "group": "cuisine"
            }
        ],
        "id": "826gcw2h-ea179a082bd84dcda12398ef4def3e7a",
        "openingHours": {
            "text": "Mon-Thu, Sun: 12:00 - 22:00<br/>Fri, Sat: 12:00 - 00:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T120000",
                    "duration": "PT10H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,SU"
                },
                {
                    "start": "T120000",
                    "duration": "PT12H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "Veeno - The Italian Wine Cafe",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.48058,
            -2.24686
        ],
        "distance": 115,
        "title": "The Restaurant Bar & Grill",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "14 John Dalton Street<br/>Manchester Central<br/>Manchester<br/>M2 6JR",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-05e5c276ac194695bd15d08658be3ae4;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0z?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "british",
                "title": "British",
                "group": "cuisine"
            },
            {
                "id": "european",
                "title": "European",
                "group": "cuisine"
            },
            {
                "id": "grill",
                "title": "Grill",
                "group": "cuisine"
            }
        ],
        "id": "826gcw2h-05e5c276ac194695bd15d08658be3ae4",
        "openingHours": {
            "text": "Mon-Sat: 12:00 - 23:00<br/>Sun: 12:00 - 22:30",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T120000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA"
                },
                {
                    "start": "T120000",
                    "duration": "PT10H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "Restaurant Bar & Grill",
                "language": "en"
            },
            {
                "name": "The Restaurant Bar and Grill Manchester",
                "language": "en"
            },
            {
                "name": "The Restaurat bar and grill",
                "language": "en"
            },
            {
                "name": "Ridgefield house",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.47992,
            -2.24881
        ],
        "distance": 100,
        "title": "Emporio Armani",
        "averageRating": 0,
        "category": {
            "id": "clothing-accessories-shop",
            "title": "Clothing & Accessories",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/clothing-accessories-shop?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/09.icon",
        "vicinity": "The Avenue<br/>Manchester<br/>Manchester<br/>M3 3",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-424570403d4849028e5c8e4f0e136bbb;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz00?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "id": "826gcw2h-424570403d4849028e5c8e4f0e136bbb"
    },
    {
        "position": [
            53.48056,
            -2.24789
        ],
        "distance": 112,
        "title": "Byron Hamburgers",
        "averageRating": 0,
        "category": {
            "id": "snacks-fast-food",
            "title": "Snacks/Fast food",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/snacks-fast-food?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "115 Deansgate<br/>Manchester Central<br/>Manchester<br/>M3 2",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-19a495f100b8042b5860dd1e5c7513e5;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz01?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "burger",
                "title": "Burgers",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-19a495f100b8042b5860dd1e5c7513e5",
        "openingHours": {
            "text": "Mon-Thu: 11:30 - 23:00<br/>Fri, Sat: 11:30 - 23:30<br/>Sun: 11:30 - 22:30",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T113000",
                    "duration": "PT11H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH"
                },
                {
                    "start": "T113000",
                    "duration": "PT12H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                },
                {
                    "start": "T113000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "Byron",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.47845,
            -2.24773
        ],
        "distance": 130,
        "title": "Sir Ralph Abercromby",
        "averageRating": 0,
        "category": {
            "id": "bar-pub",
            "title": "Bar/Pub",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/bar-pub?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/22.icon",
        "vicinity": "Bootle Street<br/>Manchester<br/>Manchester<br/>M2 5",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-a3f19aff6fb04b04a79d7ee2e67add1b;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz02?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "id": "826gcw2h-a3f19aff6fb04b04a79d7ee2e67add1b",
        "openingHours": {
            "text": "Mon-Thu: 11:00 - 23:00<br/>Fri, Sat: 11:00 - 01:00<br/>Sun: 12:00 - 23:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T110000",
                    "duration": "PT12H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH"
                },
                {
                    "start": "T110000",
                    "duration": "PT14H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                },
                {
                    "start": "T120000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        }
    },
    {
        "position": [
            53.479863,
            -2.249447
        ],
        "distance": 139,
        "title": "Wagamama",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "The Avenue<br/>Spinningfields<br/>Manchester<br/>M3 3AP",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-5b1c9889b1d442ae8e511e3d6e65e008;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz03?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "asian",
                "title": "Asian",
                "group": "cuisine"
            },
            {
                "id": "japanese",
                "title": "Japanese",
                "group": "cuisine"
            }
        ],
        "id": "826gcw2h-5b1c9889b1d442ae8e511e3d6e65e008",
        "openingHours": {
            "text": "Mon-Sat: 11:00 - 23:00<br/>Sun: 11:00 - 22:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T110000",
                    "duration": "PT12H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA"
                },
                {
                    "start": "T110000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        },
        "chainIds": [
            "9430"
        ],
        "alternativeNames": [
            {
                "name": "wagamama",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.479384,
            -2.249095
        ],
        "distance": 115,
        "title": "Handmade Burger Co.",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "184 Deansgate<br/>Spinningfields<br/>Manchester<br/>M3 3",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-981c16af7f9407fc441322a056bf99ec;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz04?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "american",
                "title": "American",
                "group": "cuisine"
            },
            {
                "id": "british",
                "title": "British",
                "group": "cuisine"
            },
            {
                "id": "burger",
                "title": "Burgers",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-981c16af7f9407fc441322a056bf99ec",
        "openingHours": {
            "text": "Mon: 12:00 - 23:00<br/>Tue-Thu: 12:00 - 22:00<br/>Fri: 12:00 - 22:30<br/>Sat: 11:30 - 22:30<br/>Sun: 12:00 - 21:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T120000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO"
                },
                {
                    "start": "T120000",
                    "duration": "PT10H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:TU,WE,TH"
                },
                {
                    "start": "T120000",
                    "duration": "PT10H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR"
                },
                {
                    "start": "T113000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SA"
                },
                {
                    "start": "T120000",
                    "duration": "PT09H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        }
    },
    {
        "position": [
            53.4805,
            -2.2465
        ],
        "distance": 116,
        "title": "Ape & Apple",
        "averageRating": 0,
        "category": {
            "id": "bar-pub",
            "title": "Bar/Pub",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/bar-pub?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/22.icon",
        "vicinity": "28 John Dalton Street<br/>Manchester Central<br/>Manchester<br/>M2 6HQ",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-e1ce71d3043b44239094e27af388e981;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz05?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "id": "826gcw2h-e1ce71d3043b44239094e27af388e981",
        "openingHours": {
            "text": "Mon-Thu: 12:00 - 23:00<br/>Fri, Sat: 12:00 - 00:00<br/>Sun: 12:00 - 21:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T120000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH"
                },
                {
                    "start": "T120000",
                    "duration": "PT12H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                },
                {
                    "start": "T120000",
                    "duration": "PT09H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "Ape and Apple Pub",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.4789,
            -2.24926
        ],
        "distance": 146,
        "title": "Hawksmoor",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "186 Deansgate<br/>Spinningfields<br/>Manchester<br/>M3 3",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-705e72c8ade7000520956af3facfd898;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xMA?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "british",
                "title": "British",
                "group": "cuisine"
            },
            {
                "id": "steak",
                "title": "Steak",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-705e72c8ade7000520956af3facfd898",
        "openingHours": {
            "text": "Mon-Sat: 17:00 - 22:30<br/>Sun: 12:00 - 21:30",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T170000",
                    "duration": "PT05H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA"
                },
                {
                    "start": "T120000",
                    "duration": "PT09H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "Hawksmoor Manchester",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.480921,
            -2.247367
        ],
        "distance": 147,
        "title": "La Bandera",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "2 Ridgefield<br/>Shopping District<br/>Manchester<br/>M2 6EQ",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-8eeaf669a6330fcc58d2aed358875e18;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xMQ?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "brewpub",
                "title": "Brewpub",
                "group": "cuisine"
            },
            {
                "id": "spanish",
                "title": "Spanish",
                "group": "cuisine"
            },
            {
                "id": "tapas",
                "title": "Tapas",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-8eeaf669a6330fcc58d2aed358875e18",
        "openingHours": {
            "text": "Mon-Thu, Sun: 12:00 - 22:00<br/>Fri: 12:00 - 23:00<br/>Sat: 12:00 - 23:30",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T120000",
                    "duration": "PT10H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,SU"
                },
                {
                    "start": "T120000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR"
                },
                {
                    "start": "T120000",
                    "duration": "PT11H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:SA"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "La Bandera at the Market",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.47963,
            -2.24551
        ],
        "distance": 125,
        "title": "Duttons Manchester",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "2 Albert Square<br/>Manchester Central<br/>Manchester<br/>M60 8",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-a96d4f82ece90f674957dcab01fefb55;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xMg?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "brewpub",
                "title": "Brewpub",
                "group": "cuisine"
            },
            {
                "id": "british",
                "title": "British",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-a96d4f82ece90f674957dcab01fefb55",
        "openingHours": {
            "text": "Mon-Thu: 08:00 - 23:00<br/>Fri, Sat: 08:00 - 00:00<br/>Sun: 09:00 - 22:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T080000",
                    "duration": "PT15H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH"
                },
                {
                    "start": "T080000",
                    "duration": "PT16H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                },
                {
                    "start": "T090000",
                    "duration": "PT13H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        }
    },
    {
        "position": [
            53.478916,
            -2.245642
        ],
        "distance": 139,
        "title": "Tampopo",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "16 Albert Square<br/>Manchester Central<br/>Manchester<br/>M2 5",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-aa160919ba74426b80290a95957ba291;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xMw?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "asian",
                "title": "Asian",
                "group": "cuisine"
            },
            {
                "id": "japanese",
                "title": "Japanese",
                "group": "cuisine"
            }
        ],
        "id": "826gcw2h-aa160919ba74426b80290a95957ba291",
        "openingHours": {
            "text": "Mon-Wed: 12:00 - 22:30<br/>Thu-Sat: 12:00 - 23:00<br/>Sun: 12:00 - 22:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T120000",
                    "duration": "PT10H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE"
                },
                {
                    "start": "T120000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:TH,FR,SA"
                },
                {
                    "start": "T120000",
                    "duration": "PT10H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        }
    },
    {
        "position": [
            53.479863,
            -2.249447
        ],
        "distance": 139,
        "title": "Brooks Brothers",
        "averageRating": 0,
        "category": {
            "id": "clothing-accessories-shop",
            "title": "Clothing & Accessories",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/clothing-accessories-shop?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/09.icon",
        "vicinity": "The Avenue<br/>Spinningfields<br/>Manchester<br/>M3 3AP",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826t4x7z-dc4a133b7a3602c287d41ab5ace1e491;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xNA?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "id": "826t4x7z-dc4a133b7a3602c287d41ab5ace1e491"
    },
    {
        "position": [
            53.48096,
            -2.24651
        ],
        "distance": 162,
        "title": "Al Bacio",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "14 South King Street<br/>Shopping District<br/>Manchester<br/>M2 6DW",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-fed03360b0a30062361d3a6a473a2d3b;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xNQ?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "italian",
                "title": "Italian",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-fed03360b0a30062361d3a6a473a2d3b",
        "openingHours": {
            "text": "Mon-Thu: 17:00 - 22:30<br/>Fri, Sat: 12:00 - 23:00<br/>Sun: 12:00 - 21:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T170000",
                    "duration": "PT05H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH"
                },
                {
                    "start": "T120000",
                    "duration": "PT11H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                },
                {
                    "start": "T120000",
                    "duration": "PT09H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "Al-Bacio Italian Restaurant",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.478382,
            -2.248926
        ],
        "distance": 169,
        "title": "Revolucion De Cuba",
        "averageRating": 0,
        "category": {
            "id": "bar-pub",
            "title": "Bar/Pub",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/bar-pub?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/22.icon",
        "vicinity": "11 Peter Street<br/>Manchester Central<br/>Manchester<br/>M2 5QR",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-9048375823bc0dfa25cabaa26b6b5b87;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xNg?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "cuban",
                "title": "Cuban",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-9048375823bc0dfa25cabaa26b6b5b87",
        "openingHours": {
            "text": "Mon-Wed, Sun: 11:30 - 02:00<br/>Thu-Sat: 11:30 - 03:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T113000",
                    "duration": "PT14H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,SU"
                },
                {
                    "start": "T113000",
                    "duration": "PT15H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:TH,FR,SA"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "Revolucion de Cuba, Manchester",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.48031,
            -2.24557
        ],
        "distance": 145,
        "title": "My Thai",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "John Dalton Street<br/>Manchester<br/>Manchester<br/>M2 6",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826jx7ps-5984b173029e04cbd3a0111e3aa4c429;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xNw?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "asian",
                "title": "Asian",
                "group": "cuisine"
            },
            {
                "id": "thai",
                "title": "Thai",
                "group": "cuisine"
            }
        ],
        "id": "826jx7ps-5984b173029e04cbd3a0111e3aa4c429",
        "openingHours": {
            "text": "Mon-Thu, Sun: 11:00 - 23:00<br/>Fri, Sat: 11:00 - 00:00",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T110000",
                    "duration": "PT12H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,SU"
                },
                {
                    "start": "T110000",
                    "duration": "PT13H00M",
                    "recurrence": "FREQ:DAILY;BYDAY:FR,SA"
                }
            ]
        },
        "alternativeNames": [
            {
                "name": "My Thai Restaurant",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.480936,
            -2.247349
        ],
        "distance": 149,
        "title": "South",
        "averageRating": 0,
        "category": {
            "id": "dance-night-club",
            "title": "Dance or Nightclub",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/dance-night-club?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/33.icon",
        "vicinity": "4 South King Street<br/>Shopping District<br/>Manchester<br/>M2 6",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-b7f830eff0264beab7e6fc76f7996b76;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xOA?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "id": "826gcw2h-b7f830eff0264beab7e6fc76f7996b76",
        "alternativeNames": [
            {
                "name": "South Nightclub",
                "language": "en"
            }
        ]
    },
    {
        "position": [
            53.478706,
            -2.249146
        ],
        "distance": 152,
        "title": "Topkapi Palace",
        "averageRating": 0,
        "category": {
            "id": "restaurant",
            "title": "Restaurant",
            "href": "https://places.cit.api.here.com/places/v1/categories/places/restaurant?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
            "type": "urn:nlp-types:category",
            "system": "places"
        },
        "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/03.icon",
        "vicinity": "205 Deansgate<br/>Manchester Central<br/>Manchester<br/>M3 3",
        "having": [

        ],
        "type": "urn:nlp-types:place",
        "href": "https://places.cit.api.here.com/places/v1/places/826gcw2h-836a569f43d240589ae8cbd99b0263f2;context=Zmxvdy1pZD1hMmZlYTRjZC1iNmNlLTUzZmUtOWViYS0yMTUzMmQ1M2ZkY2RfMTUzMDI4ODY2MzY0NF8wXzMxMzEmcmFuaz0xOQ?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
        "tags": [
            {
                "id": "turkish",
                "title": "Turkish",
                "group": "cuisine"
            }
        ],
        "id": "826gcw2h-836a569f43d240589ae8cbd99b0263f2",
        "openingHours": {
            "text": "Mon-Sat: 11:30 - 23:00<br/>Sun: 12:00 - 22:30",
            "label": "Opening hours",
            "isOpen": true,
            "structured": [
                {
                    "start": "T113000",
                    "duration": "PT11H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA"
                },
                {
                    "start": "T120000",
                    "duration": "PT10H30M",
                    "recurrence": "FREQ:DAILY;BYDAY:SU"
                }
            ]
        }
    }
]