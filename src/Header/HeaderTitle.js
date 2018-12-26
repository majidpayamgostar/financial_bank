import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class HeaderTitle extends Component {
    render() {
        return (
            <View style={styles.headerTitle}>
                <Text style={{fontSize:20,color:'black',borderBottomColor:'#5245ff',borderBottomWidth: 2,height:44}}>Accounts</Text>
                <Image
                    style={styles.magnifier}
                    source={require('../images/magnifier.png')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerTitle:{
        flex:.14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 13,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 2,
    },
    magnifier:{
        margin: 8
    }
});