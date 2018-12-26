import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderTop from "./HeaderTop";
import HeaderTitle from "./HeaderTitle";
import HeaderFooter from "./HeaderFooter";

export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerMain}>
                <HeaderTitle/>
                <HeaderTop/>
                <HeaderFooter/>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    headerMain: {
        flex: .37,
        backgroundColor:'#f9fafc',
        paddingHorizontal: 20
    },

});