import React, {Component} from 'react';
import Header from "./Header/Header";
import {View, Text, StyleSheet} from 'react-native';
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Body/>
                <Footer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});