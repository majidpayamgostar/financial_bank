import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class HeaderFooter extends Component {
    render() {
        return (
            <View style={styles.headerFooter}>
                <Text style={{color:'#b9b9c9',fontSize:12,fontWeight: 'bold'}}>Wednesday 24 August 2018</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerFooter: {
        flex: .20,
        backgroundColor:'#f2f2f6',
        justifyContent: 'center',
        paddingHorizontal: 13
    }
});