import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Choice from "./Choice";

export default class Body extends Component {
    render() {
        const choices = [
            {
                title: 'Jetstar Airways',
                description: 'Visa Debit',
                image: require('../images/airplane.png'),
                price: '-$118.45',
                type: 'Travel'
            },
            {
                title: 'Uber',
                description: 'Visa Debit',
                image: require('../images/car.png'),
                price: '-$18.45',
                type: 'Taxi'
            },
            {
                title: 'Deliveroo',
                description: 'Credit Card',
                image: require('../images/cutlery.png'),
                price: '-$118.45',
                type: 'Food'
            },
            {
                title: 'Telstra',
                description: 'Transfer',
                image: require('../images/document.png'),
                price: '-$118.45',
                type: 'Bills'
            },
            {
                title: 'Spotify',
                description: 'Credit Card',
                image: require('../images/music-player.png'),
                price: '-$8.45',
                type: 'Music'
            },
            {
                title: 'Grand Budapest Hotel',
                description: 'Credit Card',
                image: require('../images/hotel.png'),
                price: '-$8.45',
                type: 'Resident'
            },
            
        
        ];
        return (
            <View style={styles.bodyMain}>
                <ScrollView>
                    {
                        choices.map((choice, i) => <Choice choice={choice} key={i}/>)
                    }
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyMain: {
        flex: .55,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    }
});